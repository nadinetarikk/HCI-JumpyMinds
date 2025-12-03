import svgPaths from "./svg-ou1l8odfhr";
import imgLogo from "figma:asset/1b2540f5544cb6b9547b306ab25dc37440e77ce4.png";
import imgJumpyMinds from "figma:asset/8fbeaaab23203d29d21e6e6eb9f36d3b544791b4.png";

function InputField() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0 w-full" data-name="Input Field">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[18px] not-italic text-[#8c94a3] text-[16px] text-nowrap top-[13px] whitespace-pre">Nickname...</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e9eaf0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function InputField1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[76px] items-start overflow-clip relative shrink-0 w-[648px]" data-name="Input Field">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#1d2026] text-[14px] text-nowrap tracking-[-0.14px] whitespace-pre">
        <span>{`Child’s Nickname `}</span>
        <span className="font-['Inter:Bold',sans-serif] font-bold text-[#ff383c]">*</span>
      </p>
      <InputField />
    </div>
  );
}

function InputField2() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0 w-full" data-name="Input Field">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[18px] not-italic text-[#8c94a3] text-[16px] text-nowrap top-[13px] whitespace-pre">(MM/DD/YYYY)</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e9eaf0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function InputField3() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[76px] items-start overflow-clip relative shrink-0 w-[648px]" data-name="Input Field">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#1d2026] text-[14px] text-nowrap tracking-[-0.14px] whitespace-pre">
        <span>{`Child’s Date of Birth `}</span>
        <span className="font-['Inter:Bold',sans-serif] font-bold text-[#ff383c]">*</span>
      </p>
      <InputField2 />
    </div>
  );
}

function InputField4() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0 w-full" data-name="Input Field">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[18px] not-italic text-[#8c94a3] text-[16px] text-nowrap top-[13px] whitespace-pre">Grade...</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e9eaf0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function InputField5() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[76px] items-start overflow-clip relative shrink-0 w-[648px]" data-name="Input Field">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#1d2026] text-[14px] text-nowrap tracking-[-0.14px] whitespace-pre">
        <span>{`Child’s Grade `}</span>
        <span className="font-['Inter:Bold',sans-serif] font-bold text-[#ff383c]">*</span>
      </p>
      <InputField4 />
    </div>
  );
}

function CheckBox() {
  return (
    <div className="bg-white relative shrink-0 size-[22px]" data-name="Check Box">
      <div aria-hidden="true" className="absolute border border-[#ced1d9] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Checkbox() {
  return (
    <div className="content-stretch flex gap-[10px] items-start justify-center relative shrink-0" data-name="Checkbox">
      <CheckBox />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#6e7485] text-[14px] text-nowrap tracking-[-0.14px] whitespace-pre">Male</p>
      <CheckBox />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#6e7485] text-[14px] text-nowrap tracking-[-0.14px] whitespace-pre">Female</p>
    </div>
  );
}

function Checkbox1() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-[10px] items-start justify-center ml-0 mt-[46px] relative" data-name="Checkbox">
      <Checkbox />
    </div>
  );
}

function InputField6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Input Field">
      <Checkbox1 />
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal leading-[22px] ml-0 mt-0 not-italic relative text-[#1d2026] text-[14px] text-nowrap tracking-[-0.14px] whitespace-pre">
        <span>{`Child’s Gender `}</span>
        <span className="font-['Inter:Bold',sans-serif] font-bold text-[#ff383c]">*</span>
      </p>
    </div>
  );
}

function CheckBox1() {
  return (
    <div className="bg-white relative shrink-0 size-[22px]" data-name="Check Box">
      <div aria-hidden="true" className="absolute border border-[#ced1d9] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Checkbox2() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Checkbox">
      <CheckBox1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#6e7485] text-[14px] text-nowrap tracking-[-0.14px] whitespace-pre">Science</p>
    </div>
  );
}

function CheckBox2() {
  return (
    <div className="bg-white relative shrink-0 size-[22px]" data-name="Check Box">
      <div aria-hidden="true" className="absolute border border-[#ced1d9] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Checkbox3() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Checkbox">
      <CheckBox2 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#6e7485] text-[14px] text-nowrap tracking-[-0.14px] whitespace-pre">{`Culture & Social Studies`}</p>
    </div>
  );
}

function CheckBox3() {
  return (
    <div className="bg-white relative shrink-0 size-[22px]" data-name="Check Box">
      <div aria-hidden="true" className="absolute border border-[#ced1d9] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Checkbox4() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Checkbox">
      <CheckBox3 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#6e7485] text-[14px] text-nowrap tracking-[-0.14px] whitespace-pre">{`Reading & Stories`}</p>
    </div>
  );
}

function CheckBox4() {
  return (
    <div className="bg-white relative shrink-0 size-[22px]" data-name="Check Box">
      <div aria-hidden="true" className="absolute border border-[#ced1d9] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Checkbox5() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Checkbox">
      <CheckBox4 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#6e7485] text-[14px] text-nowrap tracking-[-0.14px] whitespace-pre">{`Arts & Creativity`}</p>
    </div>
  );
}

function Checkbox6() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-[50px] items-start ml-[0.5px] mt-[46px] relative w-[638px]" data-name="Checkbox">
      <Checkbox2 />
      <Checkbox3 />
      <Checkbox4 />
      <Checkbox5 />
    </div>
  );
}

function InputField7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Input Field">
      <Checkbox6 />
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal leading-[22px] ml-0 mt-0 not-italic relative text-[#1d2026] text-[14px] text-nowrap tracking-[-0.14px] whitespace-pre">What does your child enjoy?</p>
    </div>
  );
}

function CheckBox5() {
  return (
    <div className="bg-white relative shrink-0 size-[22px]" data-name="Check Box">
      <div aria-hidden="true" className="absolute border border-[#ced1d9] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Checkbox7() {
  return (
    <div className="content-stretch flex gap-[10px] items-start justify-center relative shrink-0" data-name="Checkbox">
      <CheckBox5 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#6e7485] text-[14px] text-nowrap tracking-[-0.14px] whitespace-pre">Every 10 minutes</p>
    </div>
  );
}

function CheckBox6() {
  return (
    <div className="bg-white relative shrink-0 size-[22px]" data-name="Check Box">
      <div aria-hidden="true" className="absolute border border-[#ced1d9] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Checkbox8() {
  return (
    <div className="content-stretch flex gap-[10px] items-start justify-center relative shrink-0" data-name="Checkbox">
      <CheckBox6 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#6e7485] text-[14px] text-nowrap tracking-[-0.14px] whitespace-pre">Every 20 minutes</p>
    </div>
  );
}

function CheckBox7() {
  return (
    <div className="bg-white relative shrink-0 size-[22px]" data-name="Check Box">
      <div aria-hidden="true" className="absolute border border-[#ced1d9] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Checkbox9() {
  return (
    <div className="content-stretch flex gap-[10px] items-start justify-center relative shrink-0" data-name="Checkbox">
      <CheckBox7 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#6e7485] text-[14px] text-nowrap tracking-[-0.14px] whitespace-pre">I’ll decide later</p>
    </div>
  );
}

function Checkbox10() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-[10px] items-start justify-center ml-0 mt-[46px] relative" data-name="Checkbox">
      <Checkbox7 />
      <Checkbox8 />
      <Checkbox9 />
    </div>
  );
}

function InputField8() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Input Field">
      <Checkbox10 />
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal leading-[22px] ml-0 mt-0 not-italic relative text-[#1d2026] text-[14px] text-nowrap tracking-[-0.14px] whitespace-pre">How often should we remind your child to take a break?</p>
    </div>
  );
}

function Checkbox11() {
  return <div className="[grid-area:1_/_1] h-[22px] ml-0 mt-[46px] w-[64px]" data-name="Checkbox" />;
}

function InputField9() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Input Field">
      <Checkbox11 />
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal leading-[22px] ml-0 mt-0 not-italic relative text-[#1d2026] text-[14px] text-nowrap tracking-[-0.14px] whitespace-pre">How does your child usually feel about studying?</p>
    </div>
  );
}

function From() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0" data-name="From">
      <InputField1 />
      <InputField3 />
      <InputField5 />
      <InputField6 />
      <InputField7 />
      <InputField8 />
      <InputField9 />
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ArrowRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ArrowRight">
          <g id="Vector"></g>
          <path d="M3.75 12H20.25" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p176caaa0} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Buttons() {
  return (
    <div className="bg-[#ff6636] box-border content-stretch flex gap-[12px] items-center justify-center px-[24px] py-0 relative shrink-0 w-[200px]" data-name="Buttons">
      <p className="capitalize font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[48px] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.128px] whitespace-pre">Create account</p>
      <ArrowRight />
    </div>
  );
}

function Btn() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center justify-center relative shrink-0 w-[648px]" data-name="BTN">
      <Buttons />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-center left-[189px] top-[185px]">
      <p className="font-['Poppins:Medium',sans-serif] h-[60px] leading-[normal] not-italic relative shrink-0 text-[40px] text-black text-center w-[1055px]">Let’s get to know your child!</p>
      <From />
      <Btn />
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

function Buttons1() {
  return (
    <div className="bg-[#ff6636] box-border content-stretch flex gap-[12px] items-center justify-center px-[24px] py-0 relative shrink-0" data-name="Buttons">
      <p className="capitalize font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[48px] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.128px] whitespace-pre">Sign In</p>
    </div>
  );
}

function Btns() {
  return (
    <div className="box-border content-stretch flex gap-[16px] items-center justify-center px-[50px] py-0 relative shrink-0" data-name="BTNS">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#4e5566] text-[14px] text-nowrap tracking-[-0.14px] whitespace-pre">Do you have already an account?</p>
      <Buttons1 />
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute bg-white box-border content-stretch flex items-center justify-between left-0 px-[50px] py-[20px] top-0 w-[1440px]" data-name="Navigation">
      <Logo />
      <Btns />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_-1px_0px_0px_inset_#e9eaf0]" />
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

function Button() {
  return (
    <div className="bg-[#ffeee8] box-border content-stretch flex gap-[16px] items-start p-[8px] relative" data-name="Button">
      <ArrowRight1 />
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

function Button1() {
  return (
    <div className="bg-[#ffeee8] box-border content-stretch flex gap-[16px] items-start p-[8px] relative shrink-0" data-name="Button">
      <ArrowRight2 />
    </div>
  );
}

function Icons() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-start left-[1316px] top-[969px]" data-name="Icons">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Button />
        </div>
      </div>
      <Button1 />
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="bg-white relative size-full" data-name="Desktop - 3">
      <Frame />
      <Navigation />
      <Icons />
    </div>
  );
}