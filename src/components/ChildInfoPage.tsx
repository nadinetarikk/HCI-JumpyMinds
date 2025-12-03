import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import svgPaths from "../imports/svg-ou1l8odfhr";
import imgLogo from "figma:asset/3622f114575d6e32261a4828a0673423e1f4e7e2.png";
import imgJumpyMinds from "figma:asset/8fbeaaab23203d29d21e6e6eb9f36d3b544791b4.png";

function InputField({ value, onChange, placeholder }: { value: string; onChange: (v: string) => void; placeholder: string }) {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0 w-full" data-name="Input Field">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[18px] not-italic text-[#1d2026] placeholder:text-[#8c94a3] text-[16px] text-nowrap top-[13px] whitespace-pre bg-transparent border-0 outline-none w-[calc(100%-36px)]"
        />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e9eaf0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function InputField1({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[76px] items-start overflow-clip relative shrink-0 w-[648px]" data-name="Input Field">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#1d2026] text-[14px] text-nowrap tracking-[-0.14px] whitespace-pre">
        <span>{`Child's Nickname `}</span>
        <span className="font-['Inter:Bold',sans-serif] font-bold text-[#ff383c]">*</span>
      </p>
      <InputField value={value} onChange={onChange} placeholder="Nickname..." />
    </div>
  );
}

function InputField2({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0 w-full" data-name="Input Field">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="(MM/DD/YYYY)"
          className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[18px] not-italic text-[#1d2026] placeholder:text-[#8c94a3] text-[16px] text-nowrap top-[13px] whitespace-pre bg-transparent border-0 outline-none w-[calc(100%-36px)]"
        />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e9eaf0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function InputField3({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[76px] items-start overflow-clip relative shrink-0 w-[648px]" data-name="Input Field">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#1d2026] text-[14px] text-nowrap tracking-[-0.14px] whitespace-pre">
        <span>{`Child's Date of Birth `}</span>
        <span className="font-['Inter:Bold',sans-serif] font-bold text-[#ff383c]">*</span>
      </p>
      <InputField2 value={value} onChange={onChange} />
    </div>
  );
}

function InputField4({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0 w-full" data-name="Input Field">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Grade..."
          className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[18px] not-italic text-[#1d2026] placeholder:text-[#8c94a3] text-[16px] text-nowrap top-[13px] whitespace-pre bg-transparent border-0 outline-none w-[calc(100%-36px)]"
        />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e9eaf0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function InputField5({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[76px] items-start overflow-clip relative shrink-0 w-[648px]" data-name="Input Field">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#1d2026] text-[14px] text-nowrap tracking-[-0.14px] whitespace-pre">
        <span>{`Child's Grade `}</span>
        <span className="font-['Inter:Bold',sans-serif] font-bold text-[#ff383c]">*</span>
      </p>
      <InputField4 value={value} onChange={onChange} />
    </div>
  );
}

function CheckBox({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <div 
      className="bg-white relative shrink-0 size-[22px] cursor-pointer" 
      data-name="Check Box"
      onClick={onChange}
    >
      {checked && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3 h-3 bg-[#ff6636] rounded-sm" />
        </div>
      )}
      <div aria-hidden="true" className="absolute border border-[#ced1d9] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Checkbox({ gender, setGender }: { gender: string; setGender: (g: string) => void }) {
  return (
    <div className="content-stretch flex gap-[10px] items-start justify-center relative shrink-0" data-name="Checkbox">
      <CheckBox checked={gender === 'male'} onChange={() => setGender('male')} />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#6e7485] text-[14px] text-nowrap tracking-[-0.14px] whitespace-pre">Male</p>
      <CheckBox checked={gender === 'female'} onChange={() => setGender('female')} />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#6e7485] text-[14px] text-nowrap tracking-[-0.14px] whitespace-pre">Female</p>
    </div>
  );
}

function Checkbox1({ gender, setGender }: { gender: string; setGender: (g: string) => void }) {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-[10px] items-start justify-center ml-0 mt-[46px] relative" data-name="Checkbox">
      <Checkbox gender={gender} setGender={setGender} />
    </div>
  );
}

function InputField6({ gender, setGender }: { gender: string; setGender: (g: string) => void }) {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Input Field">
      <Checkbox1 gender={gender} setGender={setGender} />
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal leading-[22px] ml-0 mt-0 not-italic relative text-[#1d2026] text-[14px] text-nowrap tracking-[-0.14px] whitespace-pre">
        <span>{`Child's Gender `}</span>
        <span className="font-['Inter:Bold',sans-serif] font-bold text-[#ff383c]">*</span>
      </p>
    </div>
  );
}

function CheckBox1({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <div 
      className="bg-white relative shrink-0 size-[22px] cursor-pointer" 
      data-name="Check Box"
      onClick={onChange}
    >
      {checked && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3 h-3 bg-[#ff6636] rounded-sm" />
        </div>
      )}
      <div aria-hidden="true" className="absolute border border-[#ced1d9] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Checkbox2({ interests, toggleInterest }: { interests: string[]; toggleInterest: (i: string) => void }) {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Checkbox">
      <CheckBox1 checked={interests.includes('science')} onChange={() => toggleInterest('science')} />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#6e7485] text-[14px] text-nowrap tracking-[-0.14px] whitespace-pre">Science</p>
    </div>
  );
}

function CheckBox2({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <div 
      className="bg-white relative shrink-0 size-[22px] cursor-pointer" 
      data-name="Check Box"
      onClick={onChange}
    >
      {checked && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3 h-3 bg-[#ff6636] rounded-sm" />
        </div>
      )}
      <div aria-hidden="true" className="absolute border border-[#ced1d9] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Checkbox3({ interests, toggleInterest }: { interests: string[]; toggleInterest: (i: string) => void }) {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Checkbox">
      <CheckBox2 checked={interests.includes('culture')} onChange={() => toggleInterest('culture')} />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#6e7485] text-[14px] text-nowrap tracking-[-0.14px] whitespace-pre">{`Culture & Social Studies`}</p>
    </div>
  );
}

function CheckBox3({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <div 
      className="bg-white relative shrink-0 size-[22px] cursor-pointer" 
      data-name="Check Box"
      onClick={onChange}
    >
      {checked && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3 h-3 bg-[#ff6636] rounded-sm" />
        </div>
      )}
      <div aria-hidden="true" className="absolute border border-[#ced1d9] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Checkbox4({ interests, toggleInterest }: { interests: string[]; toggleInterest: (i: string) => void }) {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Checkbox">
      <CheckBox3 checked={interests.includes('reading')} onChange={() => toggleInterest('reading')} />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#6e7485] text-[14px] text-nowrap tracking-[-0.14px] whitespace-pre">{`Reading & Stories`}</p>
    </div>
  );
}

function CheckBox4({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <div 
      className="bg-white relative shrink-0 size-[22px] cursor-pointer" 
      data-name="Check Box"
      onClick={onChange}
    >
      {checked && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3 h-3 bg-[#ff6636] rounded-sm" />
        </div>
      )}
      <div aria-hidden="true" className="absolute border border-[#ced1d9] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Checkbox5({ interests, toggleInterest }: { interests: string[]; toggleInterest: (i: string) => void }) {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Checkbox">
      <CheckBox4 checked={interests.includes('arts')} onChange={() => toggleInterest('arts')} />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#6e7485] text-[14px] text-nowrap tracking-[-0.14px] whitespace-pre">{`Arts & Creativity`}</p>
    </div>
  );
}

function Checkbox6({ interests, toggleInterest }: { interests: string[]; toggleInterest: (i: string) => void }) {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-[50px] items-start ml-[0.5px] mt-[46px] relative w-[638px]" data-name="Checkbox">
      <Checkbox2 interests={interests} toggleInterest={toggleInterest} />
      <Checkbox3 interests={interests} toggleInterest={toggleInterest} />
      <Checkbox4 interests={interests} toggleInterest={toggleInterest} />
      <Checkbox5 interests={interests} toggleInterest={toggleInterest} />
    </div>
  );
}

function InputField7({ interests, toggleInterest }: { interests: string[]; toggleInterest: (i: string) => void }) {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Input Field">
      <Checkbox6 interests={interests} toggleInterest={toggleInterest} />
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal leading-[22px] ml-0 mt-0 not-italic relative text-[#1d2026] text-[14px] text-nowrap tracking-[-0.14px] whitespace-pre">What does your child enjoy?</p>
    </div>
  );
}

function CheckBox5({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <div 
      className="bg-white relative shrink-0 size-[22px] cursor-pointer" 
      data-name="Check Box"
      onClick={onChange}
    >
      {checked && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3 h-3 bg-[#ff6636] rounded-sm" />
        </div>
      )}
      <div aria-hidden="true" className="absolute border border-[#ced1d9] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Checkbox7({ breakFreq, setBreakFreq }: { breakFreq: string; setBreakFreq: (f: string) => void }) {
  return (
    <div className="content-stretch flex gap-[10px] items-start justify-center relative shrink-0" data-name="Checkbox">
      <CheckBox5 checked={breakFreq === '10min'} onChange={() => setBreakFreq('10min')} />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#6e7485] text-[14px] text-nowrap tracking-[-0.14px] whitespace-pre">Every 10 minutes</p>
    </div>
  );
}

function CheckBox6({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <div 
      className="bg-white relative shrink-0 size-[22px] cursor-pointer" 
      data-name="Check Box"
      onClick={onChange}
    >
      {checked && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3 h-3 bg-[#ff6636] rounded-sm" />
        </div>
      )}
      <div aria-hidden="true" className="absolute border border-[#ced1d9] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Checkbox8({ breakFreq, setBreakFreq }: { breakFreq: string; setBreakFreq: (f: string) => void }) {
  return (
    <div className="content-stretch flex gap-[10px] items-start justify-center relative shrink-0" data-name="Checkbox">
      <CheckBox6 checked={breakFreq === '20min'} onChange={() => setBreakFreq('20min')} />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#6e7485] text-[14px] text-nowrap tracking-[-0.14px] whitespace-pre">Every 20 minutes</p>
    </div>
  );
}

function CheckBox7({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <div 
      className="bg-white relative shrink-0 size-[22px] cursor-pointer" 
      data-name="Check Box"
      onClick={onChange}
    >
      {checked && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3 h-3 bg-[#ff6636] rounded-sm" />
        </div>
      )}
      <div aria-hidden="true" className="absolute border border-[#ced1d9] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Checkbox9({ breakFreq, setBreakFreq }: { breakFreq: string; setBreakFreq: (f: string) => void }) {
  return (
    <div className="content-stretch flex gap-[10px] items-start justify-center relative shrink-0" data-name="Checkbox">
      <CheckBox7 checked={breakFreq === 'later'} onChange={() => setBreakFreq('later')} />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#6e7485] text-[14px] text-nowrap tracking-[-0.14px] whitespace-pre">I'll decide later</p>
    </div>
  );
}

function Checkbox10({ breakFreq, setBreakFreq }: { breakFreq: string; setBreakFreq: (f: string) => void }) {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-[10px] items-start justify-center ml-0 mt-[46px] relative" data-name="Checkbox">
      <Checkbox7 breakFreq={breakFreq} setBreakFreq={setBreakFreq} />
      <Checkbox8 breakFreq={breakFreq} setBreakFreq={setBreakFreq} />
      <Checkbox9 breakFreq={breakFreq} setBreakFreq={setBreakFreq} />
    </div>
  );
}

function InputField8({ breakFreq, setBreakFreq }: { breakFreq: string; setBreakFreq: (f: string) => void }) {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Input Field">
      <Checkbox10 breakFreq={breakFreq} setBreakFreq={setBreakFreq} />
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal leading-[22px] ml-0 mt-0 not-italic relative text-[#1d2026] text-[14px] text-nowrap tracking-[-0.14px] whitespace-pre">How often should we remind your child to take a break?</p>
    </div>
  );
}

function Checkbox11() {
  return <div className="[grid-area:1_/_1] h-[22px] ml-0 mt-[46px] w-[64px]" data-name="Checkbox" />;
}



function From({ 
  nickname, setNickname,
  dateOfBirth, setDateOfBirth,
  grade, setGrade,
  gender, setGender, 
  interests, toggleInterest, 
  breakFreq, setBreakFreq 
}: { 
  nickname: string;
  setNickname: (v: string) => void;
  dateOfBirth: string;
  setDateOfBirth: (v: string) => void;
  grade: string;
  setGrade: (v: string) => void;
  gender: string; 
  setGender: (g: string) => void; 
  interests: string[]; 
  toggleInterest: (i: string) => void;
  breakFreq: string;
  setBreakFreq: (f: string) => void;
}) {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0" data-name="From">
      <InputField1 value={nickname} onChange={setNickname} />
      <InputField3 value={dateOfBirth} onChange={setDateOfBirth} />
      <InputField5 value={grade} onChange={setGrade} />
      <InputField6 gender={gender} setGender={setGender} />
      <InputField7 interests={interests} toggleInterest={toggleInterest} />
      <InputField8 breakFreq={breakFreq} setBreakFreq={setBreakFreq} />
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

function Buttons({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="bg-orange-500 hover:bg-orange-600 text-white rounded-lg flex gap-2 items-center justify-center px-6 py-3 w-[200px] cursor-pointer" 
      data-name="Buttons"
    >
      <p className="capitalize font-['Inter:Semi_Bold',sans-serif] font-semibold not-italic relative shrink-0 text-nowrap whitespace-pre">Create account</p>
      <ArrowRight />
    </button>
  );
}

function Btn({ onClick }: { onClick: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center justify-center relative shrink-0 w-[648px] mb-8" data-name="BTN">
      <Buttons onClick={onClick} />
    </div>
  );
}

function Frame({ 
  nickname, setNickname,
  dateOfBirth, setDateOfBirth,
  grade, setGrade,
  gender, setGender, 
  interests, toggleInterest, 
  breakFreq, setBreakFreq, 
  onSubmit 
}: { 
  nickname: string;
  setNickname: (v: string) => void;
  dateOfBirth: string;
  setDateOfBirth: (v: string) => void;
  grade: string;
  setGrade: (v: string) => void;
  gender: string; 
  setGender: (g: string) => void; 
  interests: string[]; 
  toggleInterest: (i: string) => void;
  breakFreq: string;
  setBreakFreq: (f: string) => void;
  onSubmit: () => void;
}) {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-center left-1/2 top-[100px] -translate-x-1/2">
      <p className="h-[60px] leading-[normal] not-italic relative shrink-0 text-[40px] text-black text-center w-[1055px]">Let's get to know your child!</p>
      <From 
        nickname={nickname}
        setNickname={setNickname}
        dateOfBirth={dateOfBirth}
        setDateOfBirth={setDateOfBirth}
        grade={grade}
        setGrade={setGrade}
        gender={gender} 
        setGender={setGender} 
        interests={interests} 
        toggleInterest={toggleInterest}
        breakFreq={breakFreq}
        setBreakFreq={setBreakFreq}
      />
      <Btn onClick={onSubmit} />
    </div>
  );
}

function Logo() {
  return (
    <Link to="/" className="content-stretch flex items-start relative shrink-0 no-underline" data-name="LOGO">
      <div className="relative shrink-0 size-[90px]" data-name="Logo">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogo} />
      </div>
      <div className="bg-center bg-clip-text bg-cover bg-no-repeat flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[90px] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-center tracking-[-0.96px] w-[197px]" style={{ WebkitTextFillColor: "transparent", backgroundImage: `url('${imgJumpyMinds}')` }}>
        <p className="leading-[1.24]">
          <span className="text-[#ff6636]">Jumpy</span> <span className="text-[#07a3b6]">Minds</span>
        </p>
      </div>
    </Link>
  );
}

function Buttons1() {
  return (
    <Link to="/signin" className="bg-[#ff6636] box-border content-stretch flex gap-[12px] items-center justify-center px-[24px] py-0 relative shrink-0 no-underline" data-name="Buttons">
      <p className="capitalize font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[48px] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.128px] whitespace-pre">Sign In</p>
    </Link>
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
    <div className="w-full px-4 sm:px-6 lg:px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/">
          <img src={imgLogo} alt="Jumpy Minds" className="h-12" />
        </Link>
        <div className="flex items-center gap-4">
          <span className="text-gray-600 hidden sm:inline">Do you have already an account?</span>
          <Link to="/signin" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg">
            Sign In
          </Link>
        </div>
      </div>
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
  return null;
}

export default function ChildInfoPage() {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [grade, setGrade] = useState('');
  const [gender, setGender] = useState('');
  const [interests, setInterests] = useState<string[]>([]);
  const [breakFreq, setBreakFreq] = useState('');

  const toggleInterest = (interest: string) => {
    setInterests(prev => 
      prev.includes(interest) 
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  const handleSubmit = () => {
    // Navigate to child dashboard after account creation
    navigate('/child-dashboard');
  };

  return (
    <div className="bg-white relative size-full" data-name="Desktop - 3">
      <Frame 
        nickname={nickname}
        setNickname={setNickname}
        dateOfBirth={dateOfBirth}
        setDateOfBirth={setDateOfBirth}
        grade={grade}
        setGrade={setGrade}
        gender={gender} 
        setGender={setGender} 
        interests={interests} 
        toggleInterest={toggleInterest}
        breakFreq={breakFreq}
        setBreakFreq={setBreakFreq}
        onSubmit={handleSubmit}
      />
      <Navigation />
      <Icons />
    </div>
  );
}
