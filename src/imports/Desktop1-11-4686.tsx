import svgPaths from "./svg-tab1xrcp7t";
import imgLogo from "figma:asset/1b2540f5544cb6b9547b306ab25dc37440e77ce4.png";
import imgJumpyMinds from "figma:asset/8fbeaaab23203d29d21e6e6eb9f36d3b544791b4.png";
import imgFamily from "figma:asset/b50f315365ed318fa17232fdf66d24f85aacee19.png";
import imgImage from "figma:asset/c4ed455821512b22f5f6bb11ef1e08025e3d71cf.png";
import imgImage1 from "figma:asset/9b9cd71dd16ef88a45fef3f9b68b8848820623a3.png";
import imgImage2 from "figma:asset/74b8cc427166b50df9d3b6c2ad0fb5b22ef30aad.png";
import imgChatGptImageNov232025091417Pm1 from "figma:asset/d4ba25336f9e1f7548efbe70607193bb64126698.png";
import imgParentDashboard from "figma:asset/4e94fcdc9425a5c3d9e9a005524873b3e8d37ad3.png";
import imgChatGptImageNov232025090858Pm1 from "figma:asset/a092e2e7180cd698093970de72104e94dd4886c0.png";
import imgPositiveFeedback from "figma:asset/b011d8002140c80dff04211637d41c489553af39.png";
import imgSelfCare from "figma:asset/3a44954cbc42fbb5702f82eef345d42fb09537ad.png";
import imgChatGptImageNov232025084636Pm1 from "figma:asset/c0e477bbd6d49d4354f60f1f4a524cd705f833ef.png";
import imgLogo1 from "figma:asset/e1135ef1f8b54b36b59c775b00ecfbb1af36d39c.png";

function Buttons() {
  return (
    <button className="bg-[#ff6636] box-border content-stretch flex gap-[12px] items-center justify-center px-[24px] py-0 relative shrink-0" data-name="Buttons">
      <p className="capitalize font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[48px] not-italic relative shrink-0 text-[16px] text-justify text-nowrap text-white tracking-[-0.128px] whitespace-pre">Join the Family</p>
    </button>
  );
}

function Buttons1() {
  return (
    <button className="bg-[rgba(255,255,255,0.05)] box-border content-stretch flex gap-[12px] items-center justify-center px-[24px] py-0 relative shrink-0" data-name="Buttons">
      <p className="capitalize font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[48px] not-italic relative shrink-0 text-[16px] text-justify text-nowrap text-white tracking-[-0.128px] whitespace-pre">Browse all Features</p>
    </button>
  );
}

function Buttons2() {
  return (
    <div className="content-stretch cursor-pointer flex gap-[16px] items-center justify-center relative shrink-0" data-name="Buttons">
      <Buttons />
      <Buttons1 />
    </div>
  );
}

function Contents() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0" data-name="Contents">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[48px] not-italic relative shrink-0 text-[40px] text-white tracking-[-0.4px] w-[536px]">Start learning with 20k students around the world.</p>
      <Buttons2 />
    </div>
  );
}

function FunFact() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start not-italic relative shrink-0 text-justify" data-name="Fun Fact">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[48px] relative shrink-0 text-[40px] text-white tracking-[-0.4px] w-[200px]">1k</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#b7bac7] text-[16px] w-[200px]">Online Lessons/Games</p>
    </div>
  );
}

function FunFact1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start not-italic relative shrink-0 text-justify" data-name="Fun Fact">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[48px] relative shrink-0 text-[40px] text-white tracking-[-0.4px] w-[200px]">89.9%</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#b7bac7] text-[16px] w-[200px]">Sucess Rate</p>
    </div>
  );
}

function FunFact2() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0" data-name="Fun Fact">
      <FunFact />
      <FunFact1 />
    </div>
  );
}

function CallToAction() {
  return (
    <div className="bg-[#1d2026] box-border content-stretch flex gap-[136px] items-center justify-center px-[300px] py-[100px] relative shrink-0" data-name="Call to Action">
      <Contents />
      <FunFact2 />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_-1px_0px_0px_inset_rgba(54,59,71,0.5)]" />
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="LOGO">
      <div className="relative shrink-0 size-[90px]" data-name="Logo">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogo} />
      </div>
      <div className="bg-center bg-clip-text bg-cover bg-no-repeat flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[90px] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-center tracking-[-0.96px] w-[197px]" style={{ WebkitTextFillColor: "transparent", backgroundImage: `url('${imgJumpyMinds}')` }}>
        <p className="leading-[1.24]">
          <span className="text-[#ff6636]">Jumpy</span> <span className="text-[#07a3b6]">Minds</span>
        </p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0">
      <Logo />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#8c94a3] text-[14px] text-justify tracking-[-0.14px] w-[400px]">Lessons, challenges, and games that support both academic and emotional well-being.</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Frame 75">
          <path d={svgPaths.p16b05700} fill="var(--fill-0, white)" id="Facebook" />
        </g>
      </svg>
    </div>
  );
}

function Social() {
  return (
    <div className="bg-[rgba(54,59,71,0.4)] box-border content-stretch flex gap-[10px] items-start p-[14px] relative shrink-0" data-name="Social">
      <Frame1 />
    </div>
  );
}

function Instragarm() {
  return (
    <div className="h-[18px] relative shrink-0 w-[17.996px]" data-name="Instragarm">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Instragarm">
          <path d={svgPaths.p39477700} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p3f2f4b80} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p2e5d1280} fill="var(--fill-0, white)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Social1() {
  return (
    <div className="bg-[rgba(54,59,71,0.4)] box-border content-stretch flex gap-[10px] items-start p-[14px] relative shrink-0" data-name="Social">
      <Instragarm />
    </div>
  );
}

function Linkedin() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Linkedin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Linkedin">
          <path d={svgPaths.p18088880} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p2ff5bd00} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p110a5e00} fill="var(--fill-0, white)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Social2() {
  return (
    <div className="bg-[#ff6636] box-border content-stretch flex gap-[10px] items-start p-[14px] relative shadow-[0px_6px_20px_0px_rgba(204,82,43,0.5)] shrink-0" data-name="Social">
      <Linkedin />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute h-[14.625px] left-1/2 top-[calc(50%+0.31px)] translate-x-[-50%] translate-y-[-50%] w-[18px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 15">
        <g id="Group">
          <path d={svgPaths.p26460c80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Twitter() {
  return (
    <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Twitter">
      <Group />
    </div>
  );
}

function Social3() {
  return (
    <div className="bg-[rgba(54,59,71,0.4)] box-border content-stretch flex flex-col gap-[10px] items-start p-[14px] relative shrink-0" data-name="Social">
      <Twitter />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Frame 74">
          <path d={svgPaths.p949300} fill="var(--fill-0, white)" id="Youtube" />
        </g>
      </svg>
    </div>
  );
}

function Social4() {
  return (
    <div className="bg-[rgba(54,59,71,0.4)] box-border content-stretch flex flex-col gap-[10px] items-start p-[14px] relative shrink-0" data-name="Social">
      <Frame />
    </div>
  );
}

function SocialMedia() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Social Media">
      <Social />
      <Social1 />
      <Social2 />
      <Social3 />
      <Social4 />
    </div>
  );
}

function Eduguard() {
  return (
    <div className="content-stretch flex flex-col gap-[26px] items-start justify-center relative shrink-0" data-name="Eduguard">
      <Frame2 />
      <SocialMedia />
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-[#1d2026] box-border content-stretch flex gap-[12px] items-center justify-center px-0 py-[6px] relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#8c94a3] text-[14px] text-justify text-nowrap tracking-[-0.14px] whitespace-pre">About</p>
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="ArrowRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="ArrowRight">
          <g id="Vector"></g>
          <path d="M2.5 8H13.5" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M9 3.5L13.5 8L9 12.5" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-[#1d2026] box-border content-stretch flex gap-[12px] items-center justify-center px-0 py-[6px] relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-justify text-nowrap text-white tracking-[-0.14px] whitespace-pre">Become A Student</p>
      <ArrowRight />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_-1.5px_0px_0px_inset_#ff6636]" />
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[#1d2026] box-border content-stretch flex gap-[12px] items-center justify-center px-0 py-[6px] relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#8c94a3] text-[14px] text-justify text-nowrap tracking-[-0.14px] whitespace-pre">Contact</p>
    </div>
  );
}

function Links() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Links">
      <Frame11 />
      <Frame9 />
      <Frame10 />
    </div>
  );
}

function QuickLinks() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-name="Quick Links">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-none not-italic relative shrink-0 text-[14px] text-justify text-white uppercase w-[200px]">Quick Links</p>
      <Links />
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#1d2026] box-border content-stretch flex gap-[12px] items-center justify-center px-0 py-[6px] relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#8c94a3] text-[14px] text-justify text-nowrap tracking-[-0.14px] whitespace-pre">Help Center</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[#1d2026] box-border content-stretch flex gap-[12px] items-center justify-center px-0 py-[6px] relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#8c94a3] text-[14px] text-justify text-nowrap tracking-[-0.14px] whitespace-pre">FAQs</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-[#1d2026] box-border content-stretch flex gap-[12px] items-center justify-center px-0 py-[6px] relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#8c94a3] text-[14px] text-justify text-nowrap tracking-[-0.14px] whitespace-pre">{`Terms & Condition`}</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-[#1d2026] box-border content-stretch flex gap-[12px] items-center justify-center px-0 py-[6px] relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#8c94a3] text-[14px] text-justify text-nowrap tracking-[-0.14px] whitespace-pre">Privacy Policy</p>
    </div>
  );
}

function Links1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Links">
      <Frame13 />
      <Frame14 />
      <Frame16 />
      <Frame12 />
    </div>
  );
}

function Support() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-name="Support">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-none not-italic relative shrink-0 text-[14px] text-justify text-white uppercase w-[200px]">Support</p>
      <Links1 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute bottom-[75.93%] left-[48.34%] right-[31.07%] top-0" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 8">
        <g id="Group">
          <path d={svgPaths.p16fb5000} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute bottom-[75.93%] contents left-[48.34%] right-[31.07%] top-0" data-name="Group">
      <Group1 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute bottom-0 left-[7.29%] right-[7.29%] top-[23.41%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 25">
        <g id="Group">
          <path d={svgPaths.p138b8bf0} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute bottom-0 contents left-[7.29%] right-[7.29%] top-[23.41%]" data-name="Group">
      <Group3 />
    </div>
  );
}

function Apple() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]" data-name="apple 1">
      <Group2 />
      <Group4 />
    </div>
  );
}

function Info() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 text-justify text-nowrap whitespace-pre" data-name="Info">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] relative shrink-0 text-[#b7bac7] text-[10px]">Download now</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[16px] text-white">App Store</p>
    </div>
  );
}

function DownloadOurApp() {
  return (
    <div className="bg-[rgba(54,59,71,0.4)] box-border content-stretch flex gap-[14px] items-center justify-center px-[20px] py-[12px] relative shrink-0" data-name="Download our app">
      <Apple />
      <Info />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute inset-[0.11%_7.01%_0.1%_6.24%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 32">
        <g id="Group 10">
          <path d={svgPaths.p37513f00} fill="url(#paint0_linear_6_2927)" id="Vector" />
          <path d={svgPaths.p330b9c80} fill="url(#paint1_linear_6_2927)" id="Vector_2" />
          <path d={svgPaths.p35d38980} fill="url(#paint2_linear_6_2927)" id="Vector_3" />
          <path d={svgPaths.p26f87d00} fill="url(#paint3_linear_6_2927)" id="Vector_4" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_6_2927" x1="0" x2="17.8071" y1="7.6679" y2="7.6679">
            <stop stopColor="#63BE6B" />
            <stop offset="0.506" stopColor="#5BBC6A" />
            <stop offset="1" stopColor="#4AB96A" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_6_2927" x1="0.0103123" x2="12.2387" y1="15.2814" y2="15.2814">
            <stop stopColor="#3EC6F2" />
            <stop offset="1" stopColor="#45AFE3" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_6_2927" x1="12.2387" x2="27.7555" y1="15.6967" y2="15.6967">
            <stop stopColor="#FAA51A" />
            <stop offset="0.387" stopColor="#FAB716" />
            <stop offset="0.741" stopColor="#FAC412" />
            <stop offset="1" stopColor="#FAC80F" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_6_2927" x1="0.118656" x2="18.5248" y1="23.6355" y2="23.6355">
            <stop stopColor="#EC3B50" />
            <stop offset="1" stopColor="#E7515B" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function GooglePlay() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]" data-name="google-play-5 1">
      <Group8 />
    </div>
  );
}

function Info1() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 text-justify text-nowrap whitespace-pre" data-name="Info">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[10px] relative shrink-0 text-[#b7bac7] text-[10px]">Download now</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[16px] text-white">Play Store</p>
    </div>
  );
}

function DownloadOurApp1() {
  return (
    <div className="bg-[rgba(54,59,71,0.4)] box-border content-stretch flex gap-[14px] items-center justify-center px-[20px] py-[12px] relative shrink-0" data-name="Download our app">
      <GooglePlay />
      <Info1 />
    </div>
  );
}

function App() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0" data-name="App">
      <DownloadOurApp />
      <DownloadOurApp1 />
    </div>
  );
}

function DownloadOurApp2() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-name="Download our app">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-none not-italic relative shrink-0 text-[14px] text-justify text-white uppercase w-[200px]">Downlaod our app</p>
      <App />
    </div>
  );
}

function Footer() {
  return (
    <div className="content-stretch flex gap-[30px] items-start relative shrink-0" data-name="Footer">
      <Eduguard />
      <QuickLinks />
      <Support />
      <DownloadOurApp2 />
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="absolute right-[16px] size-[16px] top-1/2 translate-y-[-50%]" data-name="ChevronDown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="CaretDown">
          <g id="Vector"></g>
          <path d="M13 6L8 11L3 6" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Dropdown() {
  return (
    <div className="bg-[#1d2026] h-[48px] relative shrink-0 w-[200px]" data-name="Dropdown">
      <div className="h-[48px] overflow-clip relative rounded-[inherit] w-[200px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[18px] not-italic text-[#8c94a3] text-[16px] text-justify text-nowrap top-[calc(50%-12px)] whitespace-pre">English</p>
        <ChevronDown />
      </div>
      <div aria-hidden="true" className="absolute border border-[#363b47] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Bottom() {
  return (
    <div className="bg-[#1d2026] box-border content-stretch flex items-center justify-between px-[300px] py-[24px] relative shrink-0 w-[1920px]" data-name="Bottom">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#8c94a3] text-[14px] text-justify text-nowrap tracking-[-0.14px] whitespace-pre">© 2025 - Team . All rights reserved</p>
      <Dropdown />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_0px_0px_inset_rgba(54,59,71,0.5)]" />
    </div>
  );
}

function Footer1() {
  return (
    <div className="absolute bg-[#1d2026] content-stretch flex flex-col gap-[80px] items-center justify-center left-[-45px] top-[2916px] w-[1485px]" data-name="Footer">
      <CallToAction />
      <Footer />
      <Bottom />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="Heading">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[40px] not-italic relative shrink-0 text-[#1d2026] text-[32px] tracking-[-0.32px] w-[424px]">2k trusted companies</p>
    </div>
  );
}

function CompanyLogo() {
  return (
    <div className="relative shrink-0 size-[100px]" data-name="Company Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 100">
        <g id="Company Logo">
          <path d={svgPaths.p3a82ac80} fill="var(--fill-0, #D81F26)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Logo1() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center px-[50px] py-0 relative shadow-[0px_0px_32px_0px_rgba(9,26,68,0.07)] shrink-0" data-name="LOGO">
      <CompanyLogo />
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="column">
      <Logo1 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute bottom-[38.84%] left-0 right-0 top-[38.84%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 23">
        <g id="Group">
          <path d={svgPaths.p301f7580} fill="var(--fill-0, #FF0000)" id="Subtract" />
          <g id="Group_2">
            <path clipRule="evenodd" d={svgPaths.p21f43730} fill="var(--fill-0, #282828)" fillRule="evenodd" id="Vector" />
            <path clipRule="evenodd" d={svgPaths.p31158e80} fill="var(--fill-0, #282828)" fillRule="evenodd" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function CompanyLogo1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[100px]" data-name="Company Logo">
      <Group7 />
    </div>
  );
}

function Logo2() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center px-[50px] py-0 relative shadow-[0px_0px_32px_0px_rgba(9,26,68,0.07)] shrink-0" data-name="LOGO">
      <CompanyLogo1 />
    </div>
  );
}

function Column1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="column">
      <Logo2 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute bottom-[33.68%] left-0 right-0 top-[33.68%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 33">
        <g id="Group 5">
          <path d={svgPaths.p2e3fc2b0} fill="var(--fill-0, #3780FF)" id="Vector" />
          <path d={svgPaths.pb34f300} fill="var(--fill-0, #38B137)" id="Vector_2" />
          <path d={svgPaths.p27e1b700} fill="var(--fill-0, #FA3913)" id="Vector_3" />
          <path d={svgPaths.p11ce4100} fill="var(--fill-0, #FCBD06)" id="Vector_4" />
          <path d={svgPaths.p3d03fd00} fill="var(--fill-0, #3780FF)" id="Vector_5" />
          <path d={svgPaths.p11e92180} fill="var(--fill-0, #FA3913)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function CompanyLogo2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[100px]" data-name="Company Logo">
      <Group5 />
    </div>
  );
}

function Logo3() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center px-[50px] py-0 relative shadow-[0px_0px_32px_0px_rgba(9,26,68,0.07)] shrink-0" data-name="LOGO">
      <CompanyLogo2 />
    </div>
  );
}

function Column2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="column">
      <Logo3 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute bottom-[39.33%] left-0 right-0 top-[39.33%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 22">
        <g id="Group 7">
          <path d={svgPaths.p15d23e00} fill="var(--fill-0, #706D6E)" id="Vector" />
          <path d={svgPaths.p2963dd30} fill="var(--fill-0, #F1511B)" id="Vector_2" />
          <path d={svgPaths.p1b3aebf1} fill="var(--fill-0, #80CC28)" id="Vector_3" />
          <path d={svgPaths.p2a5a280} fill="var(--fill-0, #00ADEF)" id="Vector_4" />
          <path d={svgPaths.p313aeb00} fill="var(--fill-0, #FBBC09)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function CompanyLogo3() {
  return (
    <div className="overflow-clip relative shrink-0 size-[100px]" data-name="Company Logo">
      <Group6 />
    </div>
  );
}

function Logo4() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center px-[50px] py-0 relative shadow-[0px_0px_32px_0px_rgba(9,26,68,0.07)] shrink-0" data-name="LOGO">
      <CompanyLogo3 />
    </div>
  );
}

function Column3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="column">
      <Logo4 />
    </div>
  );
}

function TrustedCompanies() {
  return (
    <div className="absolute box-border content-stretch flex gap-[24px] items-center justify-center left-0 px-[300px] py-[80px] top-[2626px] w-[1440px]" data-name="Trusted Companies">
      <Heading />
      <Column />
      <Column1 />
      <Column2 />
      <Column3 />
    </div>
  );
}

function ArrowRight1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ArrowRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ArrowRight">
          <g id="Vector"></g>
          <path d="M3.75 12H20.25" id="Vector_2" stroke="var(--stroke-0, #FF6636)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p176caaa0} id="Vector_3" stroke="var(--stroke-0, #FF6636)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Buttons3() {
  return (
    <button className="absolute bg-[#fffbf5] box-border content-stretch cursor-pointer flex gap-[12px] items-center justify-center left-0 px-[24px] py-0 shadow-[0px_6px_16px_0px_rgba(0,0,0,0.01)] top-[145px]" data-name="Buttons">
      <p className="capitalize font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[48px] not-italic relative shrink-0 text-[#ff6636] text-[16px] text-nowrap tracking-[-0.128px] whitespace-pre">Join Now</p>
      <ArrowRight1 />
    </button>
  );
}

function Frame20() {
  return (
    <div className="h-[40px] relative shrink-0 w-[568px]">
      <Buttons3 />
      <div className="absolute right-0 rounded-[50px] size-[225px] top-[-12.5px]" data-name="Family">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[50px] size-full" src={imgFamily} />
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-0 not-italic text-[14px] text-white top-[48.5px] tracking-[-0.14px] w-[311px]">Give your child a safe space to learn, play, and unwind. Jumpy Minds turns everyday screen time into fun adventures that build both skills and confidence.</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[40px] left-[calc(50%-284px)] not-italic text-[32px] text-white top-0 tracking-[-0.32px] w-[568px]">Join Our Family Now!</p>
    </div>
  );
}

function JoinOurFamily() {
  return (
    <div className="bg-[#ff6636] box-border content-stretch flex flex-col gap-[27px] h-[271px] items-start p-[40px] relative shrink-0" data-name="Join our family">
      <Frame20 />
    </div>
  );
}

function Number() {
  return (
    <div className="bg-[#ebebff] box-border content-stretch flex flex-col items-center justify-center px-0 py-[11px] relative rounded-[100px] shrink-0" data-name="Number">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.24] not-italic relative shrink-0 text-[#564ffd] text-[24px] text-center w-[52px]">1</p>
    </div>
  );
}

function Process() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0" data-name="Process">
      <Number />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#1d2026] text-[16px] w-[206px]">Sign up</p>
    </div>
  );
}

function Number1() {
  return (
    <div className="bg-[#fff0f0] box-border content-stretch flex flex-col items-center justify-center px-0 py-[11px] relative rounded-[100px] shrink-0" data-name="Number">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.24] not-italic relative shrink-0 text-[#ff6636] text-[24px] text-center w-[52px]">2</p>
    </div>
  );
}

function Process1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0" data-name="Process">
      <Number1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#1d2026] text-[16px] w-[206px]">Set up your profile</p>
    </div>
  );
}

function StepsRow() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0" data-name="Steps row">
      <Process />
      <Process1 />
    </div>
  );
}

function Number2() {
  return (
    <div className="bg-[#fff0f0] box-border content-stretch flex flex-col items-center justify-center px-0 py-[11px] relative rounded-[100px] shrink-0" data-name="Number">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.24] not-italic relative shrink-0 text-[#e34444] text-[24px] text-center w-[52px]">3</p>
    </div>
  );
}

function Process2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0" data-name="Process">
      <Number2 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#1d2026] text-[16px] w-[206px]">Choose your preferences</p>
    </div>
  );
}

function Number3() {
  return (
    <div className="bg-[#e1f7e3] box-border content-stretch flex flex-col items-center justify-center px-0 py-[11px] relative rounded-[100px] shrink-0" data-name="Number">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.24] not-italic relative shrink-0 text-[#23bd33] text-[24px] text-center w-[52px]">4</p>
    </div>
  );
}

function Process3() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0" data-name="Process">
      <Number3 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#1d2026] text-[16px] w-[206px]">Start your first adventure</p>
    </div>
  );
}

function StepsRow1() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0" data-name="Steps row">
      <Process2 />
      <Process3 />
    </div>
  );
}

function Steps() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-name="Steps">
      <StepsRow />
      <StepsRow1 />
    </div>
  );
}

function Steps1() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[27px] items-start p-[40px] relative shrink-0" data-name="Steps">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[40px] not-italic relative shrink-0 text-[#1d2026] text-[32px] text-nowrap tracking-[-0.32px] whitespace-pre">Steps</p>
      <Steps />
    </div>
  );
}

function Cta() {
  return (
    <div className="absolute bg-[#f5f7fa] box-border content-stretch flex gap-[24px] h-[602px] items-center justify-center left-0 px-[300px] py-[80px] top-[1342px] w-[1440px]" data-name="CTA">
      <JoinOurFamily />
      <Steps1 />
    </div>
  );
}

function Info2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[22px] not-italic relative shrink-0 text-center" data-name="Info">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#1d2026] text-[16px] w-[212px]">Samir Elbatal</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#8c94a3] text-[14px] tracking-[-0.14px] w-[212px]">Grade 2</p>
    </div>
  );
}

function Star() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Star">
          <g id="Vector"></g>
          <path d={svgPaths.p9518500} fill="var(--fill-0, #FD8E1F)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Rating() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="Rating">
      <Star />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4e5566] text-[14px] text-nowrap tracking-[-0.14px] whitespace-pre">4.6</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center justify-center not-italic relative shrink-0 text-[14px] text-nowrap tracking-[-0.14px] whitespace-pre">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#4e5566]">854</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#8c94a3]">{` students`}</p>
    </div>
  );
}

function RatingStudents() {
  return (
    <div className="box-border content-stretch flex items-center justify-between px-[16px] py-0 relative shrink-0 w-[244px]" data-name="Rating & Students">
      <Rating />
      <Frame15 />
    </div>
  );
}

function Student() {
  return (
    <div className="bg-white relative shrink-0" data-name="Student">
      <div className="box-border content-stretch flex flex-col gap-[12px] items-center justify-center overflow-clip pb-[12px] pt-0 px-0 relative rounded-[inherit]">
        <div className="pointer-events-none relative shrink-0 size-[244px]" data-name="Image">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover size-full" src={imgImage} />
          <div className="absolute inset-0 shadow-[0px_-1px_0px_0px_inset_#e9eaf0]" />
        </div>
        <Info2 />
        <div className="h-0 relative shrink-0 w-[244px]" data-name="Devider">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 244 1">
              <line id="Devider" stroke="var(--stroke-0, #E9EAF0)" x2="244" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <RatingStudents />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e9eaf0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Info3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[22px] not-italic relative shrink-0 text-center" data-name="Info">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#1d2026] text-[16px] w-[212px]">Nadine Tarek</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#8c94a3] text-[14px] tracking-[-0.14px] w-[212px]">Grade 3</p>
    </div>
  );
}

function Star1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Star">
          <g id="Vector"></g>
          <path d={svgPaths.p9518500} fill="var(--fill-0, #FD8E1F)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Rating1() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="Rating">
      <Star1 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4e5566] text-[14px] text-nowrap tracking-[-0.14px] whitespace-pre">4.9.</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex items-center justify-center not-italic relative shrink-0 text-[14px] text-nowrap tracking-[-0.14px] whitespace-pre">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#4e5566]">451,444</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#8c94a3]">{` students`}</p>
    </div>
  );
}

function RatingStudents1() {
  return (
    <div className="box-border content-stretch flex items-center justify-between px-[16px] py-0 relative shrink-0 w-[244px]" data-name="Rating & Students">
      <Rating1 />
      <Frame17 />
    </div>
  );
}

function Instructor() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[12px] items-center justify-center pb-[12px] pt-0 px-0 relative shrink-0" data-name="Instructor">
      <div aria-hidden="true" className="absolute border border-[#e9eaf0] border-solid inset-0 pointer-events-none" />
      <div className="pointer-events-none relative shrink-0 size-[244px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover size-full" src={imgImage1} />
        <div className="absolute inset-0 shadow-[0px_-1px_0px_0px_inset_#e9eaf0]" />
      </div>
      <Info3 />
      <div className="h-0 relative shrink-0 w-[244px]" data-name="Devider">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 244 1">
            <line id="Devider" stroke="var(--stroke-0, #E9EAF0)" x2="244" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <RatingStudents1 />
    </div>
  );
}

function Info4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[22px] not-italic relative shrink-0 text-center" data-name="Info">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#1d2026] text-[16px] w-[212px]">Menna Kassem</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#8c94a3] text-[14px] tracking-[-0.14px] w-[212px]">Grade 5</p>
    </div>
  );
}

function Star2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Star">
          <g id="Vector"></g>
          <path d={svgPaths.p9518500} fill="var(--fill-0, #FD8E1F)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Rating2() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="Rating">
      <Star2 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4e5566] text-[14px] text-nowrap tracking-[-0.14px] whitespace-pre">4.8</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-center justify-center not-italic relative shrink-0 text-[14px] text-nowrap tracking-[-0.14px] whitespace-pre">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#4e5566]">435,671</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#8c94a3]">{` students`}</p>
    </div>
  );
}

function RatingStudents2() {
  return (
    <div className="box-border content-stretch flex items-center justify-between px-[16px] py-0 relative shrink-0 w-[244px]" data-name="Rating & Students">
      <Rating2 />
      <Frame18 />
    </div>
  );
}

function Instructor1() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[12px] items-center justify-center pb-[12px] pt-0 px-0 relative shrink-0" data-name="Instructor">
      <div aria-hidden="true" className="absolute border border-[#e9eaf0] border-solid inset-0 pointer-events-none" />
      <div className="pointer-events-none relative shrink-0 size-[244px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover size-full" src={imgImage2} />
        <div className="absolute inset-0 shadow-[0px_-1px_0px_0px_inset_#e9eaf0]" />
      </div>
      <Info4 />
      <div className="h-0 relative shrink-0 w-[244px]" data-name="Devider">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 244 1">
            <line id="Devider" stroke="var(--stroke-0, #E9EAF0)" x2="244" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <RatingStudents2 />
    </div>
  );
}

function Rows() {
  return (
    <div className="content-stretch flex gap-[25px] items-start relative shrink-0" data-name="Rows">
      <Student />
      <Instructor />
      <Instructor1 />
    </div>
  );
}

function ArrowRight2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ArrowRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ArrowRight">
          <g id="Vector"></g>
          <path d="M3.75 12H20.25" id="Vector_2" stroke="var(--stroke-0, #FF6636)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p176caaa0} id="Vector_3" stroke="var(--stroke-0, #FF6636)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Buttons4() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] items-center justify-center px-0 py-[4px] relative shrink-0" data-name="Buttons">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#ff6636] text-[14px] text-center text-nowrap tracking-[-0.14px] whitespace-pre">Become A Student</p>
      <ArrowRight2 />
    </div>
  );
}

function BrowseAll() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Browse All">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#6e7485] text-[14px] text-center text-nowrap tracking-[-0.14px] whitespace-pre">{`Thousands of students waiting for a instructor. Start teaching & earning now!.`}</p>
      <Buttons4 />
    </div>
  );
}

function TopStudents() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[40px] h-[682px] items-center justify-center left-1/2 p-[80px] top-[1944px] translate-x-[-50%] w-[1440px]" data-name="Top Students">
      <div aria-hidden="true" className="absolute border border-[#e9eaf0] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[48px] not-italic relative shrink-0 text-[#1d2026] text-[40px] text-center tracking-[-0.4px] w-[1320px]">Top Students of The Month</p>
      <Rows />
      <BrowseAll />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-start p-[16px] relative shrink-0">
      <div className="relative shrink-0 size-[100px]" data-name="ChatGPT Image Nov 23, 2025, 09_14_17 PM 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgChatGptImageNov232025091417Pm1} />
      </div>
    </div>
  );
}

function Info5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[22px] not-italic relative shrink-0" data-name="Info">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#1d2026] text-[16px] w-[188px]">Interactive Learning</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6e7485] text-[14px] tracking-[-0.14px] w-[182px]">1,000 Lessons and Games</p>
    </div>
  );
}

function Category() {
  return (
    <div className="bg-[#ebebff] box-border content-stretch flex gap-[20px] items-center justify-center p-[20px] relative shrink-0" data-name="Category">
      <Frame3 />
      <Info5 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-start p-[16px] relative shrink-0">
      <div className="relative shrink-0 size-[100px]" data-name="Parent Dashboard">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgParentDashboard} />
      </div>
    </div>
  );
}

function Info6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[22px] not-italic relative shrink-0" data-name="Info">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#1d2026] text-[16px] w-[188px]">Parent Dashboard</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6e7485] text-[14px] tracking-[-0.14px] w-[182px]">13,932 Courses</p>
    </div>
  );
}

function Category1() {
  return (
    <div className="bg-[#f5f7fa] box-border content-stretch flex gap-[20px] items-center justify-center p-[20px] relative shrink-0" data-name="Category">
      <Frame4 />
      <Info6 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-start p-[16px] relative shrink-0">
      <div className="relative shrink-0 size-[100px]" data-name="ChatGPT Image Nov 23, 2025, 09_08_58 PM 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgChatGptImageNov232025090858Pm1} />
      </div>
    </div>
  );
}

function Info7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[22px] not-italic relative shrink-0" data-name="Info">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#1d2026] text-[16px] w-[188px]">Screen-Time Management</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6e7485] text-[14px] tracking-[-0.14px] w-[182px]">33,841 Courses</p>
    </div>
  );
}

function Category2() {
  return (
    <div className="bg-[#fff2e5] box-border content-stretch flex gap-[20px] items-center justify-center p-[20px] relative shrink-0" data-name="Category">
      <Frame5 />
      <Info7 />
    </div>
  );
}

function CategoryRow() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0" data-name="Category Row">
      <Category />
      <Category1 />
      <Category2 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-start p-[16px] relative shrink-0">
      <div className="relative shrink-0 size-[100px]" data-name="Positive Feedback">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPositiveFeedback} />
      </div>
    </div>
  );
}

function Info8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[22px] not-italic relative shrink-0" data-name="Info">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#1d2026] text-[16px] w-[188px]">Positive Feedback System</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6e7485] text-[14px] tracking-[-0.14px] w-[182px]">52,822 Courses</p>
    </div>
  );
}

function Category3() {
  return (
    <div className="bg-[#e1f7e3] box-border content-stretch flex gap-[20px] items-center justify-center p-[20px] relative shrink-0" data-name="Category">
      <Frame6 />
      <Info8 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-start p-[16px] relative shrink-0">
      <div className="relative shrink-0 size-[100px]" data-name="Self-Care">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSelfCare} />
      </div>
    </div>
  );
}

function Info9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[22px] not-italic relative shrink-0" data-name="Info">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#1d2026] text-[16px] w-[188px]">Self-Care Reminders</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6e7485] text-[14px] tracking-[-0.14px] w-[182px]">2,600 Courses</p>
    </div>
  );
}

function Category4() {
  return (
    <div className="bg-[#ffeee8] box-border content-stretch flex gap-[20px] items-center justify-center p-[20px] relative shrink-0 w-[378px]" data-name="Category">
      <Frame7 />
      <Info9 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-start p-[16px] relative shrink-0">
      <div className="relative shrink-0 size-[100px]" data-name="ChatGPT Image Nov 23, 2025, 08_46_36 PM 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgChatGptImageNov232025084636Pm1} />
      </div>
    </div>
  );
}

function Info10() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[22px] not-italic relative shrink-0" data-name="Info">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#1d2026] text-[16px] w-[188px]">Mindfulness Breaks</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6e7485] text-[14px] tracking-[-0.14px] w-[182px]">6,196 Courses</p>
    </div>
  );
}

function Category5() {
  return (
    <div className="bg-[#f5f7fa] box-border content-stretch flex gap-[20px] items-center justify-center p-[20px] relative shrink-0" data-name="Category">
      <Frame8 />
      <Info10 />
    </div>
  );
}

function CategoryRow1() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0" data-name="Category Row">
      <Category3 />
      <Category4 />
      <Category5 />
    </div>
  );
}

function Category6() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="Category">
      <CategoryRow />
      <CategoryRow1 />
    </div>
  );
}

function ArrowRight3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ArrowRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ArrowRight">
          <g id="Vector"></g>
          <path d="M3.75 12H20.25" id="Vector_2" stroke="var(--stroke-0, #FF6636)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p176caaa0} id="Vector_3" stroke="var(--stroke-0, #FF6636)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Buttons5() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] items-center justify-center px-0 py-[4px] relative shrink-0" data-name="Buttons">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#ff6636] text-[14px] text-center text-nowrap tracking-[-0.14px] whitespace-pre">Browse All</p>
      <ArrowRight3 />
    </div>
  );
}

function BrowseAll1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Browse All">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#4e5566] text-[14px] text-center text-nowrap tracking-[-0.14px] whitespace-pre">We have more feautures.</p>
      <Buttons5 />
    </div>
  );
}

function Category7() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[40px] h-[620px] items-center justify-center left-0 px-[300px] py-[80px] top-[722px] w-[1440px]" data-name="Category">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[48px] not-italic relative shrink-0 text-[#1d2026] text-[40px] text-nowrap tracking-[-0.4px] whitespace-pre">Top Features</p>
      <Category6 />
      <BrowseAll1 />
    </div>
  );
}

function HeaderContents() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[40px] items-center leading-[0] left-[calc(50%-23.5px)] not-italic px-[50px] py-0 top-[92px] translate-x-[-50%]" data-name="Header Contents">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[#1d2026] text-[72px] tracking-[-1.44px] w-[909px]">
        <p className="leading-[74px]">“Learn, play, and feel good”</p>
      </div>
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[#4e5566] text-[24px] text-center w-[654px]">
        <p className="mb-0">{`Introducing a kinder way to learn online. `}</p>
        <p>Lessons, challenges, and games that support both academic and emotional well-being.</p>
      </div>
    </div>
  );
}

function ArrowRight4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ArrowRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ArrowRight">
          <g id="Vector"></g>
          <path d="M3.75 12H20.25" id="Vector_2" stroke="var(--stroke-0, #FF6636)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p176caaa0} id="Vector_3" stroke="var(--stroke-0, #FF6636)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Buttons6() {
  return (
    <div className="bg-[#ffeee8] box-border content-stretch flex gap-[12px] h-[95px] items-center justify-center px-[24px] py-0 relative shrink-0 w-[200px]" data-name="Buttons">
      <p className="capitalize font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[48px] not-italic relative shrink-0 text-[#ff6636] text-[16px] text-nowrap tracking-[-0.128px] whitespace-pre">I’m a parent</p>
      <ArrowRight4 />
    </div>
  );
}

function ArrowRight5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ArrowRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ArrowRight">
          <g id="Vector"></g>
          <path d="M3.75 12H20.25" id="Vector_2" stroke="var(--stroke-0, #FF6636)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p176caaa0} id="Vector_3" stroke="var(--stroke-0, #FF6636)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Buttons7() {
  return (
    <div className="bg-[#ffeee8] box-border content-stretch flex gap-[12px] h-[95px] items-center justify-center px-[24px] py-0 relative shrink-0 w-[200px]" data-name="Buttons">
      <p className="capitalize font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[48px] not-italic relative shrink-0 text-[#ff6636] text-[16px] text-nowrap tracking-[-0.128px] whitespace-pre">I’m a Student</p>
      <ArrowRight5 />
    </div>
  );
}

function Buttons8() {
  return (
    <div className="absolute content-stretch flex gap-[60px] h-[95px] items-center justify-center left-[calc(50%-23px)] top-[346px] translate-x-[-50%] w-[640px]" data-name="Buttons">
      <Buttons6 />
      <Buttons7 />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-gradient-to-b from-[rgba(240,242,245,0)] h-[548px] left-0 to-[#f0f2f5] to-[220.8%] top-[174px] w-[1440px]" data-name="Header">
      <HeaderContents />
      <Buttons8 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="absolute h-[4000px] left-[calc(50%+1px)] top-[16px] translate-x-[-50%] w-[1440px]">
      <Footer1 />
      <TrustedCompanies />
      <Cta />
      <TopStudents />
      <Category7 />
      <Header />
      <div className="absolute right-[70px] size-[340px] top-[355px]" data-name="Logo">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogo1} />
      </div>
    </div>
  );
}

function NavLink() {
  return (
    <div className="bg-[#1d2026] box-border content-stretch flex gap-[10px] items-start p-[16px] relative shrink-0" data-name="Nav Link">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.14px] whitespace-pre">Home</p>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_2px_0px_0px_inset_#ff6636]" />
    </div>
  );
}

function NavLink1() {
  return (
    <div className="bg-[#1d2026] box-border content-stretch flex gap-[10px] items-start p-[16px] relative shrink-0" data-name="Nav Link">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#8c94a3] text-[14px] text-nowrap tracking-[-0.14px] whitespace-pre">About</p>
    </div>
  );
}

function NavLink2() {
  return (
    <div className="bg-[#1d2026] box-border content-stretch flex gap-[10px] items-start p-[16px] relative shrink-0" data-name="Nav Link">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#8c94a3] text-[14px] text-nowrap tracking-[-0.14px] whitespace-pre">{`Contact `}</p>
    </div>
  );
}

function NavLinks() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Nav Links">
      <NavLink />
      <NavLink1 />
      <NavLink2 />
    </div>
  );
}

function ChevronDown1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="ChevronDown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="CaretDown">
          <g id="Vector"></g>
          <path d="M9.75 4.5L6 8.25L2.25 4.5" id="Vector_2" stroke="var(--stroke-0, #A1A5B3)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function English() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0" data-name="English">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#a1a5b3] text-[14px] text-nowrap tracking-[-0.14px] whitespace-pre">English</p>
      <ChevronDown1 />
    </div>
  );
}

function English1() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0" data-name="English">
      <English />
    </div>
  );
}

function TopNav() {
  return (
    <div className="bg-[#1d2026] box-border content-stretch flex h-[52px] items-center justify-between px-[32px] py-0 relative shrink-0 w-[1440px]" data-name="Top Nav">
      <NavLinks />
      <English1 />
    </div>
  );
}

function Logo5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="LOGO">
      <div className="relative shrink-0 size-[90px]" data-name="Logo">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogo} />
      </div>
      <div className="bg-center bg-clip-text bg-cover bg-no-repeat flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[90px] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-center tracking-[-0.96px] w-[197px]" style={{ WebkitTextFillColor: "transparent", backgroundImage: `url('${imgJumpyMinds}')` }}>
        <p className="leading-[1.24]">
          <span className="text-[#ff6636]">Jumpy</span> <span className="text-[#07a3b6]">Minds</span>
        </p>
      </div>
    </div>
  );
}

function ChevronDown2() {
  return (
    <div className="absolute right-[18px] size-[16px] top-1/2 translate-y-[-50%]" data-name="ChevronDown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="CaretDown">
          <g id="Vector"></g>
          <path d="M13 6L8 11L3 6" id="Vector_2" stroke="var(--stroke-0, #4E5566)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Category8() {
  return (
    <div className="bg-white h-[48px] relative shrink-0 w-[200px]" data-name="Category">
      <div aria-hidden="true" className="absolute border border-[#e9eaf0] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[18px] not-italic text-[#4e5566] text-[16px] text-nowrap top-[calc(50%-12px)] whitespace-pre">Browse</p>
      <ChevronDown2 />
    </div>
  );
}

function MagnifyingGlass() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="MagnifyingGlass">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="MagnifyingGlass">
          <g id="Vector"></g>
          <path d={svgPaths.p452f780} id="Vector_2" stroke="var(--stroke-0, #1D2026)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p294aea80} id="Vector_3" stroke="var(--stroke-0, #1D2026)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Info11() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[18px] top-1/2 translate-y-[-50%]" data-name="Info">
      <MagnifyingGlass />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#8c94a3] text-[16px] text-nowrap whitespace-pre">What do you want learn...</p>
    </div>
  );
}

function Search() {
  return (
    <div className="bg-white h-[48px] relative shrink-0 w-[424px]" data-name="Search">
      <div className="h-[48px] overflow-clip relative rounded-[inherit] w-[424px]">
        <Info11 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e9eaf0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CategorySearch() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Category & Search">
      <Category8 />
      <Search />
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex gap-[50px] items-center justify-center relative shrink-0" data-name="Left">
      <Logo5 />
      <CategorySearch />
    </div>
  );
}

function Bell() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Bell">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Bell">
          <g id="Vector"></g>
          <path d={svgPaths.p9140180} id="Vector_2" stroke="var(--stroke-0, #1D2026)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p2be57c50} id="Vector_3" stroke="var(--stroke-0, #1D2026)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Heart() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Heart">
          <g id="Vector"></g>
          <path d={svgPaths.p2d158800} id="Vector_2" stroke="var(--stroke-0, #1D2026)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Buttons9() {
  return (
    <div className="bg-[#ffeee8] box-border content-stretch flex gap-[12px] items-center justify-center px-[24px] py-0 relative shrink-0" data-name="Buttons">
      <p className="capitalize font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[48px] not-italic relative shrink-0 text-[#ff6636] text-[16px] text-nowrap tracking-[-0.128px] whitespace-pre">Create Account</p>
    </div>
  );
}

function Buttons10() {
  return (
    <div className="bg-[#ff6636] box-border content-stretch flex gap-[12px] items-center justify-center px-[24px] py-0 relative shrink-0" data-name="Buttons">
      <p className="capitalize font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[48px] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.128px] whitespace-pre">Sign In</p>
    </div>
  );
}

function Btns() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="BTNS">
      <Buttons9 />
      <Buttons10 />
    </div>
  );
}

function Right() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Right">
      <Bell />
      <Heart />
      <Btns />
    </div>
  );
}

function Component1stNav() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="1st Nav">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[32px] py-[24px] relative w-full">
          <Left />
          <Right />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_-1px_0px_0px_inset_#e9eaf0]" />
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-[calc(50%+0.5px)] top-0 translate-x-[-50%] w-[1440px]" data-name="Navigation">
      <TopNav />
      <Component1stNav />
    </div>
  );
}

function Component01Homepage() {
  return (
    <div className="absolute bg-white h-[3800px] left-0 overflow-clip top-0 w-[1440px]" data-name="01_Homepage">
      <Frame19 />
      <Navigation />
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="bg-white relative size-full" data-name="Desktop - 1">
      <Component01Homepage />
    </div>
  );
}