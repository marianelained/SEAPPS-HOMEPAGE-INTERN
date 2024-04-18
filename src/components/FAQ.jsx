// eslint-disable-next-line no-unused-vars
import React from "react";
import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-4 bg-gray-200 rounded-lg" style={{ maxWidth: "2000px" }}>
        <Accordion
          title={<span className="text-lg font-bold">Na eexpire ba ang Filipay Card?</span>}
          answer={
            <div>
              <span className="text-lg italic font-semibold text-gray-600">Ang Regular Filipay Card ay walang expiration hanggat ito ay iyong nilo-loadan, ito ay iyong magagamit. Ang Discounted Filipay Card ay may validity lamang na isang taon.</span>
              <br /><br />
              <span className="text-lg italic font-semibold text-gray-600">* Kung ang Discounted Filipay Card ay mayroong load sa araw na ito ay naexpired. Maaring makipag-ugnayan sa Filipay Facebook page upang mailipat ang load sa bagong Discounted or Regular Filipay Card.</span>
            </div>
          }
        />
        <Accordion
          title={<span className="text-lg font-bold">Pwede ba gamitin ang Filipay Card sa ibang Automated Fare Collection System?</span>}
          answer={<span className="text-lg italic font-semibold text-gray-600">Sa ngayon maaari mo gamitin ang Filipay card sa Partner transport coop lamang. Ngunit ang Filipay ay nakikipag partnership pa sa ibang Automated Fare Collection System companies upang maging mas convenient pa sa pasahero ang pag commute.</span>}
        />
        <Accordion 
          title={<span className="text-lg font-bold">Paano kung mawala ang aking Filipay Card? Maaari ko po bang bawiin ang natitirang balanse?</span>} 
          answer={<span className="text-lg italic font-semibold text-gray-600">Kung sakali na mawala ang Filipay Card, Maaring mag message sa Filipay Facebook page at Website upang mabigyan ng solusyon.</span>}
        />
        <Accordion 
          title={<span className="text-lg font-bold">Paano ko malalaman kung magkano ang balanse ko sa aking Filipay Card?</span>} 
          answer={<span className="text-lg italic font-semibold text-gray-600">Bawat sakay sa Modern jeep at pagbaba ay may binibigay ang driver na resibo at duon nakalagay ang balance ng iyong card. Maari rin itong makita sa Filipay App sa inyong mobile phone.</span>}
        />
        <Accordion 
          title={<span className="text-lg font-bold">Maari bang gamitin ng iba ang aking Filipay Card?</span>} 
          answer={<span className="text-lg italic font-semibold text-gray-600">Oo, ang Filipay card ay transferable at pwedeng ipagamit sa iba.</span>}
        />
        <Accordion
          title={
            <div className="text-lg font-bold" style={{ textAlign: "left" }}>
              Kung sakaling masira ang Modern Jeep sa aking biyahe,<br />maari ba akong makakuha ng refund para sa pamasahe na binayaran ko sa pagsakay?
            </div>
          } 
          answer={<span className="text-lg italic font-semibold text-gray-600">Oo, makipag ugnayan lamang sa Driver ng Modern Jeepney.</span>}
        />
        <Accordion 
          title={<span className="text-lg font-bold">Magkano ang maaari kong i-load sa aking Filipay Card?</span>} 
          answer={<span className="text-lg italic font-semibold text-gray-600">Ang pag load ng Filipay Card ay walang limit. Maaari kang magload ng kahit magkano.</span>}
        />
      </div>
    </div>
  );
};

export default FAQ;
