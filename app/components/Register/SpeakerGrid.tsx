interface Speaker {
  id: string;
  name: string;
  role: string;
  image: string;
}

export const SpeakerGrid = ({ speakers }: { speakers: Speaker[] }) => {
  // Your specific gradient border color
  const borderGradient =
    "linear-gradient(97deg, #22223C 14.82%, #22223C 25.27%, #686DDD 39.55%, #22223C 49.99%, #22223C 84.47%)";

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-white">Speakers</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {speakers.map((speaker) => (
          /* OUTER DIV: Creates the 1px Gradient Border */
          <div
            key={speaker.id}
            style={{
              background: borderGradient,
              padding: "1px", // The thickness of the border
              borderRadius: "12px",
            }}
          >
            <div
              className="flex flex-col items-center text-center space-y-3 h-full"
              style={{
                background: "#050A29",
                borderRadius: "11px", // Slightly less than outer to fit perfectly
                padding: "24px 20px", // Standardized card padding
              }}
            >
              <div className="w-20 h-20 rounded-full overflow-hidden">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-white font-medium text-sm">
                  {speaker.name}
                </h4>
                <p className="text-[#73799B] text-xs mt-1">{speaker.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
