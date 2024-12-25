import PrimaryButton from "@/components/shared/Buttons/PrimaryButton";
import { useAddWithdrawMutation } from "@/redux/features/allApis/withdrawsApi/withdrawsApi";
import { useEffect, useState } from "react";
import { FcOk } from "react-icons/fc";
import { RxCrossCircled } from "react-icons/rx";
import { useSelector } from "react-redux";
import { useToasts } from "react-toast-notifications";

const WithdrawTab = () => {
  const [addWithdraw] = useAddWithdrawMutation();
  const [isAmountDeatilsOpen, setIsAmountDeatilsOpen] = useState(false);
  const { user, singleUser } = useSelector((state) => state.auth);
  const { addToast } = useToasts();

  const [formData, setFormData] = useState({
    paymentMethod: null,
    amount: [],
  });

  const withdrawMethods = [
    {
      title: "bKash",
      paymentMethod: "bkash",
      image: "https://www.baji.live/images/web/thirdparty/bkash.png",
    },
    {
      title: "Rocket",
      paymentMethod: "rocket",
      image: "https://www.baji.live/images/web/thirdparty/rocket.png",
    },
    {
      title: "Nagad",
      paymentMethod: "nagad",
      image: "https://www.baji.live/images/web/thirdparty/nagad.png",
    },
  ];

  useEffect(() => {
    if (withdrawMethods.length > 0) {
      setFormData((prev) => ({
        ...prev,
        paymentMethod: withdrawMethods[0]?.paymentMethod,
      }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSelect = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleAmountClick = (amount) => {
    setFormData((prev) => ({
      ...prev,
      amount: [...prev.amount, amount],
    }));
  };

  const handleReset = () => {
    setFormData({
      paymentMethod: null,
      amount: [],
    });
  };

  const handleWithdraw = async () => {
    if (!formData.paymentMethod || formData.amount.length === 0) {
      alert("Please complete all fields before submitting.");
      return;
    }

    const totalAmount = formData.amount.reduce((acc, amt) => acc + amt, 0);
    const withdrawData = {
      ...formData,
      amount: totalAmount,
      userId: user?.user._id,
    };

    if (singleUser?.balance <= totalAmount) {
      addToast("Amount can not be exceed from your balance", {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    }

    try {
      const result = await addWithdraw(withdrawData);
      if (result.data.insertedId) {
        addToast("Amount submitted for withdraw. Wait for the response", {
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
          {withdrawMethods.map((method) => (
            <div
              key={method.paymentMethod}
              className={`relative group flex flex-col items-center justify-center gap-2 border px-10 py-2 ${
                formData.paymentMethod === method.paymentMethod
                  ? "border-[#ffe43c] text-[#ffe43c]"
                  : "border-[#989898] hover:border-[#ffe43c] hover:text-[#ffe43c]"
              }`}
              onClick={() =>
                handleSelect("paymentMethod", method.paymentMethod)
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
      <div
        onClick={() => setIsAmountDeatilsOpen(true)}
        className="px-3 py-2 inline-flex items-center gap-2 bg-gradient-to-br from-[#f269b0] to-[#5d1b90] rounded-lg"
      >
        {isAmountDeatilsOpen && <FcOk className="text-2xl" />}
        <p>
          {user?.user.countryCode} {user?.user.phone}
        </p>
      </div>
      {isAmountDeatilsOpen && (
        <>
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
          <div className="border border-[#7293e1] bg-[#455271] px-7 py-3 rounded-md text-sm space-y-1">
            <p className="pb-2">অনুস্মারক:</p>
            <p>
              1. এগিয়ে যাওয়ার আগে অনুগ্রহ করে প্রাপকের অ্যাকাউন্টের বিশদ
              দুইবার চেক করুন।
            </p>
            <p>
              2. তহবিল বা অর্থ হারানো এড়াতে আপনার অ্যাকাউন্ট কারো সাথে শেয়ার
              করবেন না।
            </p>
            <p>
              3.উইথড্র রিজেকশন প্রতিরোধ করতে আপনার ব্যাংক অ্যাকাউন্ট হোল্ডার নেম
              এবং Baji রেজিস্টার্ড নেমের সাথে মিল আছে তা নিশ্চিত করুন।
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
              type="button"
              onClick={handleWithdraw}
            >
              উইথড্র
            </PrimaryButton>
          </div>
        </>
      )}
    </div>
  );
};

export default WithdrawTab;
