import { createFileRoute, Link } from "@tanstack/react-router";
import { storyById } from "@/lib/ave/stories";
import { ReadAloud } from "@/components/ave/read-aloud";
import { useAveStore } from "@/stores/ave-store";
import { useEffect, useState } from "react";
import { VoiceToggle } from "@/components/ave/voice-toggle";

export const Route = createFileRoute("/stories/$id")({ component: StoryPage });

function StoryPage() {
  const { id } = Route.useParams();
  const story = storyById(id);
  const mark = useAveStore((s) => s.markStory);
  const [tab, setTab] = useState<"little" | "dad">("little");

  useEffect(() => {
    if (story) mark(story.id);
  }, [story, mark]);

  if (!story) {
    return (
      <div className="p-8">
        <p>That story isn’t here.</p>
        <Link to="/stories" className="text-gold">
          Back
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="relative">
        {story.video ? (
          <video
            src={story.video}
            poster={story.image}
            autoPlay
            muted
            loop
            playsInline
            className="h-[52vh] w-full object-cover"
          />
        ) : (
          <img src={story.image} alt="" className="h-[52vh] w-full object-cover" />
        )}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-bg" />
      </div>
      <div className="px-5 pb-8">
        <p className="text-[11px] tracking-[0.18em] text-gold uppercase">{story.scripture ?? story.kind}</p>
        <h1 className="font-display mt-1 text-4xl text-fg">{story.kidTitle}</h1>
        <div className="mt-4">
          <VoiceToggle tab={tab} onChange={setTab} />
        </div>
        {tab === "little" ? (
          <div className="mt-5 space-y-3">
            {story.kid.map((line) => (
              <p key={line} className="text-lg leading-relaxed text-accent">
                {line}
              </p>
            ))}
            <ReadAloud
              text={story.kid.join(" ")}
              clip={`/audio/stories/${story.id}-kid.mp3`}
              label="Read to him"
            />
          </div>
        ) : (
          <div className="mt-5 space-y-4 text-sm leading-relaxed">
            <div>
              <p className="text-[11px] tracking-[0.16em] text-gold uppercase">What happened</p>
              <p className="mt-1 text-accent">{story.dad.happened}</p>
            </div>
            <div>
              <p className="text-[11px] tracking-[0.16em] text-gold uppercase">Why Catholics remember this</p>
              <p className="mt-1 text-accent">{story.dad.why}</p>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-4">
              <p className="text-[11px] tracking-[0.16em] text-gold uppercase">Ask in the car</p>
              <p className="mt-1 text-fg">{story.dad.ask}</p>
            </div>
            <ReadAloud
              text={`${story.dad.happened} ${story.dad.why}`}
              clip={`/audio/stories/${story.id}-dad.mp3`}
              voice="orion"
              label="Read this card"
            />
            {story.saintSlug && (
              <Link to="/saints/$slug" params={{ slug: story.saintSlug }} className="inline-block text-sm text-gold">
                Open in the saints book →
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
