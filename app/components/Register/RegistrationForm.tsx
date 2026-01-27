// components/Session/RegistrationForm.tsx
import GradientButton from "@/app/ui/GradientButton";

export const RegistrationForm = ({
  selectedDate,
  selectedTime,
  formData,
  onChange,
  onSubmit,
}: any) => {
  // Your specific gradient border
  const customGradient = "linear-gradient(97deg, #22223C 14.82%, #22223C 25.27%, #686DDD 39.55%, #22223C 49.99%, #22223C 84.47%)";

  return (
    <div className="sticky top-6">
      {/* GRADIENT BORDER WRAPPER */}
      <div
        className="rounded-[12px] p-[1px] w-full"
        style={{
          background: customGradient,
        }}
      >
        {/* INNER CONTENT CONTAINER - Background #050A29 */}
        <div 
          className="bg-[#050A29] rounded-[11px] p-6 space-y-6"
        >
          <h3 className="text-[25px] font-medium leading-[36px] text-white">
            Fill out the details below.
          </h3>

          <form onSubmit={onSubmit} className="space-y-5">
            {["fullName", "email", "companyName", "role"].map((field) => (
              <div key={field} className="space-y-2">
                <label className="block text-[14px] font-normal text-[#FFFFFFE0] capitalize">
                  {field.replace(/([A-Z])/g, " $1")}
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  placeholder={field.replace(/([A-Z])/g, " $1")}
                  value={formData[field]}
                  onChange={onChange}
                  className="w-full bg-transparent border border-[#FFFFFF33] rounded-lg px-4 py-3 text-white placeholder:text-[#FFFFFFE0] outline-none focus:border-[#0274FE] transition-all"
                  required
                />
              </div>
            ))}

            {/* BUTTON SECTION */}
            <div className="pt-4">
              <div
                className="w-full"
               
              >
                <GradientButton
                  label="Submit Registration"
                  href="#" 
                 
                  bgColor="#0274FE"
                  width="100%"
                />
              </div>
              
             
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};