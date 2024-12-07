import PrimaryButton from "@/components/shared/Buttons/PrimaryButton";
import { useState } from "react";
import { FcOk } from "react-icons/fc";
import { RxCrossCircled } from "react-icons/rx";

const DepositTab = () => {
  const [formData, setFormData] = useState({
    paymentMethod: null,
    depositChannel: null,
    amount: 0,
  });

  const handleSelect = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const addDeposit = () => {
    if (
      !formData.paymentMethod ||
      !formData.depositChannel ||
      !formData.amount
    ) {
      alert("Please select all fields before submitting.");
      return;
    }
    console.log("Deposit Data Submitted:", formData);

    alert("Deposit request has been submitted successfully!");
  };
  return (
    <div className="text-white space-y-4">
      {/* Payment Method */}
      <div className="space-y-2">
        <p className="text-sm">পেমেন্ট পদ্ধতি</p>
        <div className="flex gap-3">
          {["bKash", "Nagad"].map((method) => (
            <div
              key={method}
              className={`relative group flex flex-col items-center justify-center gap-2 border px-10 py-2 ${
                formData.paymentMethod === method
                  ? "border-[#ffe43c] text-[#ffe43c]"
                  : "border-[#989898] hover:border-[#ffe43c] hover:text-[#ffe43c]"
              }`}
              onClick={() => handleSelect("paymentMethod", method)}
            >
              <img
                className="w-7"
                src="https://www.baji.live/images/web/thirdparty/bkash.png"
                alt={method}
              />
              <p
                className={`text-sm ${
                  formData.paymentMethod === method
                    ? "opacity-100"
                    : "opacity-50 group-hover:opacity-100"
                }`}
              >
                {method}
              </p>
              {formData.paymentMethod === method && (
                <FcOk className="absolute top-0 right-0 text-2xl" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Deposit Channel */}
      <div className="space-y-2">
        <p className="text-sm">ডিপোজিট চ্যানেল</p>
        <div className="flex gap-3">
          {["CashOut"].map((channel) => (
            <div
              key={channel}
              className={`relative group flex flex-col items-center justify-center gap-2 px-10 py-2 border ${
                formData.depositChannel === channel
                  ? "border-[#ffe43c] text-[#ffe43c]"
                  : "border-[#989898] hover:border-[#ffe43c] hover:text-[#ffe43c]"
              }`}
              onClick={() => handleSelect("depositChannel", channel)}
            >
              <p
                className={`text-sm ${
                  formData.depositChannel === channel
                    ? "opacity-100"
                    : "opacity-50 group-hover:opacity-100"
                }`}
              >
                {channel}
              </p>
              {formData.depositChannel === channel && (
                <FcOk className="absolute top-0 right-0 text-2xl" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Amount */}
      <div className="space-y-2">
        <div className="flex justify-between">
          <p className="text-sm">এমাউন্ট</p>
          <p className="text-sm">৳ ৫০০ - ৳ ২৫,০০০</p>
        </div>
        <div className="flex gap-3">
          {["100", "500", "1000", "2000", "3000"].map((amount) => (
            <div
              key={amount}
              className={`text-center text-sm py-1.5 md:py-3 w-20 md:w-28 border ${
                formData.amount === parseInt(amount)
                  ? "border-[#ffe43c] text-[#ffe43c]"
                  : "border-[#989898] hover:border-[#ffe43c] hover:text-[#ffe43c]"
              }`}
              onClick={() =>
                handleSelect(
                  "amount",
                  (formData.amount || 0) + parseInt(amount)
                )
              }
            >
              {amount}
            </div>
          ))}
        </div>
      </div>
      <div className="border border-[#7293e1] bg-[#455271] px-7 py-3 rounded-md text-sm">
        <p className="mb-3">
          সম্মানিত সদস্যবৃন্দ, আপনার ডিপজিট প্রসেস দ্রুততর করতে, অনুগ্রহ করে এই
          পদক্ষেপগুলি অনুসরণ করুন:
        </p>
        <p></p>
        <p>
          1. আপনি যে ফোন নম্বরটি ডিপজিটের জন্য ব্যবহার করেছেন তা ভেরিফাই করুন।
        </p>
        <p>2. সঠিক রেফারেন্স নম্বর ইনপুট করুন।</p>
        <p>3. শুধুমাত্র নির্বাচিত পরিমাণ প্রক্রিয়া করুন।</p>
        <p>4. ডিপজিটের সফল স্লিপ সংযুক্ত করুন।</p>
        <p></p>
        <p className="mt-3">অনুস্মারক:</p>
        <p>
          টাকা হারানো এড়াতে আপনার ডিভাইসে বাজি ওয়েবসাইটে প্রদর্শিত ফোন নম্বর
          সেভ করবেন না।
        </p>
      </div>

      {/* Selected Data */}
      <div className="flex gap-4">
        <div className="border-2 border-[#929292] px-3 pe-8 inline-flex items-center justify-between w-56 text-base text-[#f2dc9c]">
          {" "}
          ৳{" "}
          <p className="text-[#999] inline-flex items-center gap-3">
            {formData.amount}{" "}
            {formData.amount !== 0 && (
              <span onClick={() => handleSelect("amount", 0)}>
                <RxCrossCircled className="bg-red-600 text-white rounded-full" />
              </span>
            )}
          </p>
        </div>
        <PrimaryButton
          disabled={!formData.amount}
          type={"button"}
          onClick={addDeposit}
        >
          ডিপোজিট
        </PrimaryButton>
      </div>
    </div>
  );
};

export default DepositTab;
