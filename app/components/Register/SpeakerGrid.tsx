interface Speaker {
  id: string;
  name: string;
  role: string;
  image: string;
}

export const SpeakerGrid = ({ speakers }: { speakers: Speaker[] }) => {
  const borderGradient =
    "linear-gradient(97deg, #22223C 14.82%, #22223C 25.27%, #686DDD 39.55%, #22223C 49.99%, #22223C 84.47%)";

  return (
    <div className="space-y-4">
      <h3 className="text-[24px] font-medium leading-[30px] text-white pt-6">Speakers</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {speakers.map((speaker) => (
          <div
            key={speaker.id}
            style={{
              background: borderGradient,
              padding: "1px", 
              borderRadius: "12px",
            }}
          >
            <div
              className="flex flex-col items-center text-center space-y-6 h-full"
              style={{
                background: "#050A29",
                borderRadius: "11px", 
                padding: "24px 20px", 
              }}
            >
              <div className="w-20 h-20 rounded-full overflow-hidden">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  height={100}
                  width={100}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-white font-medium text-[16px] leading-5">
                  {speaker.name}
                </h4>
                <p className="text-[#FFFFFF99] font-normal leading-5 text-[14px] mt-1">
                  {speaker.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
