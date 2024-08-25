import { useState } from 'react'
import { FaTransgender } from 'react-icons/fa';
import { CiLocationOn } from "react-icons/ci";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IconContext } from 'react-icons';
import './App.css'

function App() {
  const govCode = {
    "01": "القاهرة", "02": "الإسكندرية", "03": "بور سعيد", "04": "السويس", "11": "دمياط", "12": "الدقهلية", "13": "الشرقية", 
    "14": "القليوبية", "15": "كفر الشيخ", "16": "الغربية", "17": "المنوفية", "18": "البحيرة", "19": "الإسماعيلية", "21": "الجيزة", 
    "22": "بني سويف", "23": "الفيوم", "24": "المنيا", "25": "أسيوط", "26": "سوهاج", "27": "قنا", "28": "أسوان", 
    "29": "الأقصر", "31": "البحر الأحمر", "32": "الوادي الجديد", "33": "مطروح", "34": "شمال سيناء", "35": "جنوب سيناء", "88": "خارج الجمهورية"
  }
  const months = [
    " ،يناير ", " ،فبراير ", " ،مارس ", " ،أبريل ", " ،مايو  ", " ،يونيو ", 
    " ،يوليو ", " ،أغسطس ", " ،سبتمبر ", " ،أكتوبر ", " ،نوفمبر ", " ،ديسمبر "
  ]
  const [input, setInput] = useState('');

	const [messageOne, setMessageOne] = useState('');
	const [messageTwo, setMessageTwo] = useState('');
	const [messageThree, setMessageThree] = useState('');

	function handleChange(e) {
		setInput(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();

		if (input.length !== 14) {
			// you can handle error states here if you want ( ͡° ͜ʖ ͡°)
			console.error('length error');

			return;
		}

		if (!/^\d+$/.test(input)) {
			// numbers only regex ( ͡° ͜ʖ ͡°)
			console.error('regex mismatch');

			return;
		} else {
			// date of birth ( ͡° ͜ʖ ͡°)

			var mon = input.at(3)+input.at(4)
			var day = input.at(5)+input.at(6)
      if (mon > 0 && mon <= 12) {
        mon = months[parseInt(mon) - 1]
      }
      if (day > 31) {
        alert("Day should be less than 31")
      }
      if (input.at(0) === '2') {
				setMessageOne(
					`19${input.at(1)}${input.at(2)}${mon}${day} `
				);
			}
			if (input.at(0) === '3') {
				setMessageOne(
					`20${input.at(1)}${input.at(2)}${mon}${day}`
				);
			}

			//gov ( ͡° ͜ʖ ͡°)
			const govNum = `${input.at(7)}${input.at(8)}`;
			setMessageTwo(govCode[govNum] ?? 'Not found');

			// gender ( ͡° ͜ʖ ͡°)
			if (Number(input.at(12)) % 2 === 0) {
				setMessageThree('أنثى');
			}
			if (Number(input.at(12)) % 2 !== 0) {
				setMessageThree('ذكر');
			}
		}
	}

  return (
    <>
      <div className="card">
        <div className="mask-group left"><div className="vect1"></div><div className="vect2"></div></div>
        <div className="mask-group right"><div className="vect1"></div><div className="vect2"></div></div>
        <div className="search">
          <h2>ممكن نتعرف!</h2>
          <p>من أي رقم قومي مصري هتقدر تعرف شوية تفاصيل بسيطة</p>
          <div className="search-bar">
            <form onSubmit={handleSubmit} style={{position: 'relative',top: '12px',background: '#f3f3f3'}}>
              <button className='search-button' type='submit'><span>إبحث</span></button>
              <input type='text' className="search-input" placeholder='رقم البطاقة . . .' onChange={handleChange} maxLength={14}/>
              <IconContext.Provider value={{className: "glass"}}>
                <FaMagnifyingGlass />
              </IconContext.Provider>
            </form>
          </div>
        </div>
        <div className="fingerprint"></div>
        <div className="data">
          <div className="dob">
            <div className="icon"><IconContext.Provider value={{className: "ico"}}><LiaBirthdayCakeSolid /></IconContext.Provider></div>
            <div className="text">تاريخ الميلاد</div>
            <div className="line"></div>
            <div id="date">{messageOne}</div>
          </div>
          <div className="loc">
            <div className="icon"><IconContext.Provider value={{className: "ico"}}><CiLocationOn /></IconContext.Provider></div>
            <div className="text">محل الإقامة</div>
            <div className="line"></div>
            <div id="gov">{messageTwo}</div>
          </div>
          <div className="gender">
            <div className="icon"><IconContext.Provider value={{className: "ico"}}><FaTransgender /></IconContext.Provider></div>
            <div className="text">النوع</div>
            <div className="line"></div>
            <div id="morf">{messageThree}</div>
          </div>
          <div className="info"><span>قدرنا نعرف الأتي</span></div>
        </div>
        <div className="contact">
          <span style={{position: 'relative', top:'19.79px', fontWeight: 'bold', background: '#D3E2F2'}}>contact@engtechnos.com </span>
          <span style={{position: 'relative', top:'19.79px', background: '#D3E2F2'}}>:تقدر تبعتلنا على الإيميل بتاعنا </span>
        </div>
      </div>
    </>
  )
}

export default App
