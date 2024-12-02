import { useState } from "react";
import PrimaryButton from "../Buttons/PrimaryButton";

const FooterTop = () => {
  const [expanded, setExpanded] = useState(false);

  // Handle the toggle for showing more or less content
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="text-[#999] py-6">
      <h2 className="text-[#dedede] text-xl py-2">
        Chomok বাংলাদেশ - বাংলাদেশের শীর্ষস্থানীয় অনলাইন গেমিং এবং বেটিং
        প্ল্যাটফর্ম
      </h2>

      <div
        className={`space-y-5 text-sm leading-5 ${
          expanded ? "" : "max-h-48 overflow-hidden opacity-50"
        }`}
      >
        <p>
          সাম্প্রতিক বছরগুলোতে, বাংলাদেশের অনলাইন গেমিং এবং বেটিং ইন্ডাস্ট্রি
          ব্যাপক উন্নতি দেখেছে, যা খেলোয়াড়দের উত্তেজনাপূর্ণ এবং লাভজনক
          অভিজ্ঞতা প্রদান করছে। আরও বেশি মানুষ ডিজিটাল প্ল্যাটফর্মগুলির প্রতি
          আগ্রহী হওয়ায়, নির্ভরযোগ্য এবং বৈচিত্র্যময় গেমিং বিকল্পগুলির চাহিদা
          বেড়েছে। আমাদের প্ল্যাটফর্মটি একটি শীর্ষ পছন্দ হিসাবে পরিচিত, যা
          বিশ্বখ্যাত প্রদানকারীদের কাছ থেকে বিস্তৃত গেম এবং বেটিং সুযোগগুলি অফার
          করে।
        </p>
        <p>
          শীর্ষ প্রদানকারীদের বৈচিত্র্যময় গেমিং বিকল্পগুলি আমাদের বিশেষত্বগুলির
          একটি প্রধান কারণ হলো আমরা যে বৈচিত্র্যময় গেমিং বিকল্পগুলি অফার করি
          তা। আমরা ইন্ডাস্ট্রির কিছু স্বনামধন্য গেম প্রদানকারীর সাথে অংশীদারিত্ব
          করেছি যাতে আপনাকে একটি বিশ্বমানের গেমিং অভিজ্ঞতা প্রদান করা যায়। আপনি
          যদি স্পোর্টস বেটিং, ক্যাসিনো গেম, বা অনন্য অনলাইন গেমিং অভিজ্ঞতা পছন্দ
          করেন, আমাদের কাছে সবই আছে।
        </p>
        {/* More paragraphs here */}
        {expanded && (
          <>
            <p>
              আমরা পোকারের অনুরাগীদের জন্য BPOKER-এর গেম এবং KA এবং WM-এর মতো
              প্রদানকারীদের কার্ড গেমের বিভিন্ন অফার প্রদান করি। একটি আরও সাধারণ
              গেমিং অভিজ্ঞতার জন্য, LUDO এবং So De মজাদার, সহজে খেলাযোগ্য
              বিকল্পগুলি প্রদান করে যা সব বয়সের জন্য উপযুক্ত।
            </p>
            <p>
              এক্সক্লুসিভ গেম প্রদানকারী এবং শিরোনাম আমাদের প্ল্যাটফর্ম ক্রমাগত
              তার গেম লাইব্রেরি প্রসারিত করছে, এবং আমরা গর্বিতভাবে এক্সক্লুসিভ
              প্রদানকারী যেমন Sexy, RT, SG, KM, JILI, P8, FC, PP, এবং PT
              অন্তর্ভুক্ত করছি। এই প্রদানকারীরা ক্লাসিক এবং উদ্ভাবনী গেমগুলির
              একটি মিশ্রণ নিয়ে আসে, যা নিশ্চিত করে যে প্রথাগত স্লট পছন্দ করুন
              বা আধুনিক, বৈশিষ্ট্য-সমৃদ্ধ শিরোনামগুলি পছন্দ করুন না কেন, এখানে
              সবার জন্য কিছু না কিছু আছে।
            </p>
            <p>
              যারা গেমিং বৈচিত্র্যে সর্বোচ্চ খুঁজছেন তাদের জন্য, আমরা
              WorldMatch, PNG, SV388, এবং NETENT-এর শিরোনামগুলি অফার করি, যেগুলি
              তাদের উচ্চ-মানের গ্রাফিক্স এবং নিমগ্ন গেমপ্লের জন্য পরিচিত। UG
              Sports এবং PLAYSTAR স্পোর্টস বেটিং এবং ক্যাসিনো গেমগুলির মিশ্রণ
              নিয়ে বৈচিত্র্য যোগ করে, যেখানে RICH88, FASTSPIN, ICF, SPRIBE, এবং
              HotRoad দ্রুত-গতি, উত্তেজনাপূর্ণ গেমগুলি নিয়ে আসে যা আপনাকে আসনের
              কিনারায় রাখে।
            </p>
            <p>
              কেন আমাদের চয়ন করবেন? বাংলাদেশে অনলাইন গেমিং এবং বেটিং এর
              ক্ষেত্রে, আমাদের প্ল্যাটফর্মটির কোনো তুলনা নেই। আমরা সুরক্ষা,
              নিরাপত্তা, এবং ন্যায়নিষ্ঠতাকে অগ্রাধিকার দিই, যাতে আপনার গেমিং
              অভিজ্ঞতা উপভোগ্য এবং নিরাপদ হয় তা নিশ্চিত করি। আমাদের
              প্ল্যাটফর্মটি লাইসেন্সপ্রাপ্ত এবং নিয়ন্ত্রিত, এবং আমরা আপনার
              ব্যক্তিগত এবং আর্থিক তথ্য রক্ষা করতে অত্যাধুনিক এনক্রিপশন
              প্রযুক্তি ব্যবহার করি।
            </p>
            <p>
              আমাদের ব্যবহারকারী-বান্ধব ইন্টারফেসটি আমাদের বিস্তৃত গেম এবং
              স্পোর্টস বেটিং বিকল্পগুলির মাধ্যমে নেভিগেট করা সহজ করে তোলে, আপনি
              একজন অভিজ্ঞ খেলোয়াড় হন বা অনলাইন গেমিংয়ে নতুন হন। এছাড়াও,
              আমাদের নিবেদিত গ্রাহক সহায়তা দলটি ২৪/৭ উপলব্ধ, সহায়তা সবসময়
              মাত্র এক ক্লিক দূরে।
            </p>
            <p>
              আজই যোগ দিন এবং জয় শুরু করুন আপনি যদি আপনার গেমিং এবং বেটিং
              অভিজ্ঞতাকে পরবর্তী স্তরে নিয়ে যেতে প্রস্তুত হন, তবে আজই আমাদের
              সাথে যোগ দিন। শুধু আপনি একটি অপ্রতিদ্বন্দ্বী গেম এবং স্পোর্টস
              বেটিং সুযোগগুলির একটি নির্বাচনেই অ্যাক্সেস পাবেন না, আপনি আমাদের
              উদার বোনাস এবং প্রচারগুলির সুবিধাও নিতে পারবেন।
            </p>
            <p>
              যারা আমাদের প্ল্যাটফর্মে বন্ধুদের রেফার করেন তাদের জন্য আমরা
              এক্সক্লুসিভ রেফারেল বোনাস অফার করি। আপনার রেফার করা বন্ধুরা যখন
              সাইন আপ করে এবং খেলা শুরু করে, তখন আপনি পুরস্কার অর্জন করবেন যা
              আপনার নিজস্ব গেমিং অভিজ্ঞতাকে উন্নত করতে ব্যবহার করা যেতে পারে।
              এটি একটি উইন-উইন পরিস্থিতি - যত বেশি বন্ধু আপনি রেফার করবেন, তত
              বেশি আপনি জিততে পারবেন!
            </p>
            <p>
              উপসংহার বাংলাদেশের সেরা অনলাইন গেমিং এবং বেটিং প্ল্যাটফর্ম মিস
              করবেন না। Microgaming, SABA Sports, JDB, CQ9, Pocket Games এবং আরও
              অনেক শীর্ষ প্রদানকারীদের সাথে, আমরা একটি বিস্তৃত গেমিং অভিজ্ঞতা
              অফার করি যা অঞ্চলে অপ্রতিদ্বন্দ্বী। আজই সাইন আপ করুন এবং আমাদের
              প্ল্যাটফর্মের সবকিছু অন্বেষণ শুরু করুন। মনে রাখবেন, আপনার পরবর্তী
              বড় জয়টি মাত্র এক ক্লিক দূরে থাকতে পারে!
            </p>
          </>
        )}
      </div>
      <div className="flex justify-center w-full mt-4">
        <PrimaryButton
          onClick={toggleExpanded}
          className="mt-4 text-blue-500 hover:underline"
        >
          {expanded ? "Show Less" : "Show More"}
        </PrimaryButton>
      </div>
    </div>
  );
};

export default FooterTop;
