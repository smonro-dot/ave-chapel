import {
  mysteriesFor,
  ordinal,
  PRAYER_TEXT,
  PRAYER_TITLE,
  type MysteryCard,
  type MysterySetId,
  type PrayKind,
  type PrayerId,
} from "./rosary-data";

export type PrayStep = {
  id: string;
  prayerId: PrayerId;
  clipId: string;
  title: string;
  text: string;
  beadId: string;
  subtitle?: string;
  decade?: number;
  mystery?: MysteryCard;
  awaitContinue?: boolean;
};

let seq = 0;
function uid(prefix: string) {
  seq += 1;
  return `${prefix}-${seq}`;
}

function prayerStep(
  prayerId: Exclude<PrayerId, "mystery">,
  beadId: string,
  extra: Partial<PrayStep> = {},
): PrayStep {
  return {
    id: uid(prayerId),
    prayerId,
    clipId: prayerId,
    title: PRAYER_TITLE[prayerId],
    text: PRAYER_TEXT[prayerId],
    beadId,
    ...extra,
  };
}

function mysteryStep(mystery: MysteryCard, beadId: string, awaitContinue: boolean): PrayStep {
  return {
    id: uid(`mystery-${mystery.id}`),
    prayerId: "mystery",
    clipId: mystery.id,
    title: mystery.title,
    text: mystery.announce,
    beadId,
    subtitle: `${ordinal(mystery.index)} ${mystery.set[0]!.toUpperCase()}${mystery.set.slice(1)} Mystery`,
    decade: mystery.index,
    mystery,
    awaitContinue,
  };
}

function opening(includeFatima: boolean): PrayStep[] {
  const steps: PrayStep[] = [
    prayerStep("sign-of-cross", "crucifix"),
    prayerStep("apostles-creed", "crucifix"),
    prayerStep("our-father", "tail-of"),
    prayerStep("hail-mary", "tail-hm-1", { subtitle: "For an increase in faith" }),
    prayerStep("hail-mary", "tail-hm-2", { subtitle: "For an increase in hope" }),
    prayerStep("hail-mary", "tail-hm-3", { subtitle: "For an increase in charity" }),
    prayerStep("glory-be", "tail-glory"),
  ];
  if (includeFatima) steps.push(prayerStep("fatima", "tail-glory"));
  return steps;
}

function decadeSteps(mystery: MysteryCard, includeFatima: boolean, learn: boolean): PrayStep[] {
  const ofBead = mystery.index === 1 ? "medal" : `d${mystery.index}-of`;
  const steps: PrayStep[] = [
    mysteryStep(mystery, ofBead, learn),
    prayerStep("our-father", ofBead, { decade: mystery.index, mystery }),
  ];
  for (let i = 1; i <= 10; i++) {
    steps.push(
      prayerStep("hail-mary", `d${mystery.index}-hm-${i}`, {
        decade: mystery.index,
        mystery,
        subtitle: `${i} of 10`,
      }),
    );
  }
  const last = `d${mystery.index}-hm-10`;
  steps.push(prayerStep("glory-be", last, { decade: mystery.index, mystery }));
  if (includeFatima) steps.push(prayerStep("fatima", last, { decade: mystery.index, mystery }));
  return steps;
}

function closing(): PrayStep[] {
  return [
    prayerStep("hail-holy-queen", "medal"),
    prayerStep("closing", "medal"),
    prayerStep("sign-of-cross", "crucifix"),
  ];
}

export function buildRosary(opts: {
  set: MysterySetId;
  kind: PrayKind;
  decadeIndex?: number;
  includeFatima: boolean;
}): PrayStep[] {
  seq = 0;
  const all = mysteriesFor(opts.set);
  const selected =
    opts.kind === "decade" ? [all[(opts.decadeIndex ?? 1) - 1] ?? all[0]!] : all;
  const learn = opts.kind === "learn";
  return [
    ...opening(opts.includeFatima),
    ...selected.flatMap((m) => decadeSteps(m, opts.includeFatima, learn)),
    ...closing(),
  ];
}
