import React, { useState } from "react";

const ProjectCard = ({
  title,
  image,
  description,
  duration,
  websiteLink,
  websiteName = "View",
  skills = [],
  className = "",
  ...props
}) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <article
      className={`relative w-full max-w-md mx-auto cursor-pointer ${className}`}
      onClick={() => setFlipped((f) => !f)}   
      style={{ perspective: "1000px" }}
      {...props}
    >
      {/* inner rotating panel */}
      <div
        className={[
          "relative h-80 sm:h-96 w-full transition-transform duration-500",
          "[transform-style:preserve-3d]",
          flipped ? "[transform:rotateY(180deg)]" : "",
        ].join(" ")}
      >
        {/* Front Side */}
        <div
          className="absolute inset-0 overflow-hidden rounded-2xl [backface-visibility:hidden]"
          aria-label="Project front"
        >
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-4 text-white">
            <h2 className="text-2xl font-semibold">{title}</h2>
            {duration && (
              <p className="text-sm/5 opacity-80 italic">{duration}</p>
            )}
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute inset-0 rounded-2xl [backface-visibility:hidden] [transform:rotateY(180deg)]
                     border border-white/10 bg-zinc-900/95 text-white backdrop-blur-md"
          aria-label="Project details"
        >
          <div className="flex h-full flex-col p-4">
            <h3 className="text-xl font-semibold">{title}</h3>

            {/* Description */}
            {description && (
              <p className="mt-2 text-xl leading-6 opacity-90">{description}</p>
            )}

            {/* Skills list */}
            {skills?.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2 pt-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="truncate rounded-full bg-white/10 px-3 py-1 text-md font-medium
                               ring-1 ring-white/15 backdrop-blur-sm"
                  >
                    {s}
                  </span>
                ))}
              </div>
            )}

            {/* Footer website link */}
            <div className="mt-auto pt-4 flex justify-between items-center">
              <span className="text-xs opacity-70">Tap to flip ↺</span>
              {websiteLink && (
                <a
                  href={websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-lg bg-white/90 px-3 py-2 text-xs font-semibold text-zinc-900 hover:bg-white"
                  onClick={(e) => e.stopPropagation()} 
                >
                  {websiteName}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
