import PrimaryButton from "@/components/shared/Buttons/PrimaryButton";
import { useAddDepositMutation } from "@/redux/features/allApis/depositsApi/depositsApi";
import { useEffect, useState } from "react";
import { FcOk } from "react-icons/fc";
import { RxCrossCircled } from "react-icons/rx";
import { useSelector } from "react-redux";
import { useToasts } from "react-toast-notifications";
import bkash from "@/assets/payments/bkash1.png";
import rocket from "@/assets/payments/rocket1.png";
import nagad from "@/assets/payments/nagad1.png";

const DepositTab = () => {
  const { user } = useSelector((state) => state.auth);
  const [addDeposit] = useAddDepositMutation();
  const [formData, setFormData] = useState({
    paymentMethod: null,
    depositChannel: null,
    amount: [],
  });
  const { addToast } = useToasts();

  const depositMethods = [
    {
      title: "bKash",
      paymentMethod: "bkash",
      image: bkash,
      number: "+8801900000000",
      channels: [{ title: "CashOut", value: "cashout" }],
    },
    {
      title: "Rocket",
      paymentMethod: "rocket",
      image: rocket,
      number: "+8801755555555",
      channels: [{ title: "CashOut", value: "cashout" }],
    },
    {
      title: "Nagad",
      paymentMethod: "nagad",
      image:nagad,
      number: "+8801511111111",
      channels: [{ title: "CashOut", value: "cashout" }],
    },
  ];

  useEffect(() => {
    const initialPaymentMethod = depositMethods[0]?.paymentMethod;
    const initialDepositChannel =
      depositMethods[0]?.channels?.[0]?.value || null;

    setFormData((prev) => ({
      ...prev,
      paymentMethod: initialPaymentMethod,
      depositChannel: initialDepositChannel,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSelect = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleReset = () => {
    setFormData((prev) => ({
      ...prev,
      amount: [],
    }));
  };

  const handleAmountClick = (amount) => {
    setFormData((prev) => ({
      ...prev,
      amount: [...prev.amount, amount],
    }));
  };

  const handleDeposit = async () => {
    if (
      !formData.paymentMethod ||
      !formData.depositChannel ||
      formData.amount.length === 0
    ) {
      alert("Please select all fields before submitting.");
      return;
    }
    const totalAmount = formData.amount.reduce((acc, amt) => acc + amt, 0);
    const depositInfo = {
      ...formData,
      amount: totalAmount,
      userId: user?.user._id,
    };

    try {
      const result = await addDeposit(depositInfo);
      if (result.data.insertedId) {
        addToast("Amount depositted successfully.Wait for the response", {
          appearance: "success",
          autoDismiss: true,
        });
        handleReset();
      }
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      addToast("Failed to add a deposit", {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };

  return (
    <div className="text-white space-y-4">
      {/* Payment Method */}
      <div className="space-y-2">
        <p className="text-sm">পেমেন্ট পদ্ধতি</p>
        <div className="flex flex-wrap gap-3">
          {depositMethods.map((method) => (
            <div
              key={method.paymentMethod}
              className={`relative group flex flex-col items-center justify-center gap-2 border px-10 py-2 ${
                formData.paymentMethod === method.paymentMethod
                  ? "border-[#ffe43c] text-[#ffe43c]"
                  : "border-[#989898] hover:border-[#ffe43c] hover:text-[#ffe43c]"
              }`}
              onClick={() =>
                handleSelect("paymentMethod", method.paymentMethod) ||
                handleSelect(
                  "depositChannel",
                  method.channels?.[0]?.value || null
                )
              }
            >
              <img className="w-7" src={method.image} alt={method.title} />
              <p
                className={`text-sm ${
                  formData.paymentMethod === method.paymentMethod
                    ? "opacity-100"
                    : "opacity-50 group-hover:opacity-100"
                }`}
              >
                {method.title}
              </p>
              {formData.paymentMethod === method.paymentMethod && (
                <FcOk className="absolute top-0 right-0 text-2xl" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Deposit Channel */}
      {formData.paymentMethod && (
        <div className="space-y-2">
          <p className="text-sm">ডিপোজিট চ্যানেল</p>
          <div className="flex gap-3">
            {depositMethods
              .find((method) => method.paymentMethod === formData.paymentMethod)
              ?.channels.map((channel) => (
                <div
                  key={channel.value}
                  className={`relative group flex flex-col items-center justify-center gap-2 px-10 py-2 border ${
                    formData.depositChannel === channel.value
                      ? "border-[#ffe43c] text-[#ffe43c]"
                      : "border-[#989898] hover:border-[#ffe43c] hover:text-[#ffe43c]"
                  }`}
                  onClick={() => handleSelect("depositChannel", channel.value)}
                >
                  <p
                    className={`text-sm ${
                      formData.depositChannel === channel.value
                        ? "opacity-100"
                        : "opacity-50 group-hover:opacity-100"
                    }`}
                  >
                    {channel.title}
                  </p>
                  {formData.depositChannel === channel.value && (
                    <FcOk className="absolute top-0 right-0 text-2xl" />
                  )}
                </div>
              ))}
          </div>
        </div>
      )}

      <div className="px-3 py-2 inline-flex items-center gap-2 bg-gradient-to-br from-[#f269b0] to-[#5d1b90] rounded-lg">
        <p>
          {depositMethods.find(
            (method) => method.paymentMethod === formData.paymentMethod
          )?.number || "No number available"}
        </p>
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
                formData.amount.includes(parseInt(amount))
                  ? "border-[#ffe43c] text-[#ffe43c]"
                  : "border-[#989898] hover:border-[#ffe43c] hover:text-[#ffe43c]"
              }`}
              onClick={() => handleAmountClick(parseInt(amount))}
            >
              {amount}
            </div>
          ))}
        </div>
      </div>

      {/* Instruction */}
      <div className="border border-[#7293e1] bg-[#455271] px-7 py-3 rounded-md text-sm">
        <p className="mb-3">
          সম্মানিত সদস্যবৃন্দ, আপনার ডিপজিট প্রসেস দ্রুততর করতে, অনুগ্রহ করে এই
          পদক্ষেপগুলি অনুসরণ করুন:
        </p>
        <p>
          1. আপনি যে ফোন নম্বরটি ডিপজিটের জন্য ব্যবহার করেছেন তা ভেরিফাই করুন।
        </p>
        <p>2. সঠিক রেফারেন্স নম্বর ইনপুট করুন।</p>
        <p>3. শুধুমাত্র নির্বাচিত পরিমাণ প্রক্রিয়া করুন।</p>
        <p>4. ডিপজিটের সফল স্লিপ সংযুক্ত করুন।</p>
        <p className="mt-3">অনুস্মারক:</p>
        <p>
          টাকা হারানো এড়াতে আপনার ডিভাইসে বাজি ওয়েবসাইটে প্রদর্শিত ফোন নম্বর
          সেভ করবেন না।
        </p>
      </div>

      {/* Selected Data */}
      <div className="flex gap-4">
        <div className="border-2 border-[#929292] px-3 pe-8 inline-flex items-center justify-between w-56 text-base text-[#f2dc9c]">
          ৳{" "}
          <p className="text-[#999] inline-flex items-center gap-3">
            {formData.amount.reduce((acc, amt) => acc + amt, 0)}
            {formData.amount.length > 0 && (
              <span onClick={() => handleSelect("amount", [])}>
                <RxCrossCircled className="bg-red-600 text-white rounded-full" />
              </span>
            )}
          </p>
        </div>
        <PrimaryButton
          disabled={formData.amount.length === 0}
          type={"button"}
          onClick={handleDeposit}
        >
          ডিপোজিট
        </PrimaryButton>
      </div>
    </div>
  );
};

export default DepositTab;
