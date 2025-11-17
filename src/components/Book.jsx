import React from 'react';
import HTMLFlipBook from "react-pageflip";

function Book() {

    return (
        <HTMLFlipBook
            width={500}
            height={650}
            maxShadowOpacity={0.5}
            drawShadow={true}
            showCover={true}
            size="fixed"
        >
            {/* FRONT COVER PAGE */}
            <div className="cover" style={{background: 'transparent'}}>
                <div className="page-content front-cover-page"></div>
            </div>

            {/* PAGE */}
            <div className="page">
                <div className="page-content "></div>
            </div>

            {/* TITLE PAGE */}
            <div className="page">
                <div className="title-page-content">
                    <h1 className="title-header">DIARY OF <br/> MARIA CLARA</h1>
                    <p>Reflections, Fears, and Longings of a <br/> Noli Me Tángere Heroine</p>
                </div>
            </div>

            {/* PREFACE */}
            <div className="page">
                <h1 className="preface-header">PREFACE</h1>

                <div className="page-content preface-text">
                    This book is dedicated to the readers who wish to step into the heart of Maria Clara, a character
                    immortalized by José Rizal. Through these pages, we hope to capture her inner thoughts, hopes, and
                    struggles as she navigated love, loss, and the constraints of her world. May this diary serve as a
                    reflection of courage, longing, and the timelessness of human emotion.
                </div>
            </div>

            {/* TABLE OF CONTENTS */}
            <div className="page">
                <h1 className="toc-header">TABLE OF CONTENTS</h1>
                <div className="page-content toc">
                    <div className="toc-section">
                        <div className="toc-title">Reflections on Ibarra</div>
                        <div className="toc-entry">
                            <span className="toc-text">2 de noviembre de 1881......................................................1</span>
                        </div>
                    </div>

                    <div className="toc-section">
                        <div className="toc-title">Shock and Sorrow</div>
                        <div className="toc-entry">
                            <span className="toc-text">13 de noviembre de 1881....................................................3</span>
                        </div>
                    </div>

                    <div className="toc-section">
                        <div className="toc-title">Fear and Despair</div>
                        <div className="toc-entry">
                            <span className="toc-text">20 de noviembre de 1881....................................................5</span>
                        </div>
                        <div className="toc-entry">
                            <span className="toc-text">25 de noviembre de 1881....................................................6</span>
                        </div>
                    </div>

                    <div className="toc-section">
                        <div className="toc-title">Moment of Truth</div>
                        <div className="toc-entry">
                            <span className="toc-text">28 de noviembre de 1881....................................................7</span>
                        </div>
                    </div>

                    <div className="toc-section">
                        <div className="toc-title">Convent Life</div>
                        <div className="toc-entry">
                            <span className="toc-text">1 de diciembre de 1881.....................................................10</span>
                        </div>
                        <div className="toc-entry">
                            <span className="toc-text">2 de diciembre de 1881.....................................................11</span>
                        </div>
                        <div className="toc-entry">
                            <span className="toc-text">23 de diciembre de 1881...................................................12</span>
                        </div>
                    </div>

                    <div className="toc-section">
                        <div className="toc-title">Back Matter</div>
                        <div className="toc-entry">
                            <span className="toc-text">Author’s Notes..................................................................15</span>
                        </div>
                        <div className="toc-entry">
                            <span
                                className="toc-text">Contributions....................................................................16</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* PAGE 1 */}
            <div className="page left-page">
                <div className="page-content">
                    <h3 className="entry-date">2 de noviembre de 1881</h3>
                    <p className="entry-text">
                        Ngayong gabi ay hindi ko mapigilang balikan ang mga sandaling nagdaan mula nang dumating si
                        Crisostomo galing sa Europa. Pitong taon akong naghintay at pinanghahawakan ang bawat salita sa
                        kanyang liham na iniwan, at ngayon ay parang nananaginip ako dahil narito na siyang muli sa
                        aking piling. Noong muli naming pagtatagpo sa pagtitipon, halos hindi ko maibuka ang aking bibig
                        sa hiya at galak, ngunit sa bawat titig niya ay naramdaman kong hindi naglaho ang kanyang
                        pag-ibig. Nang maglakad kami sa azotea, tila ba’y ang mga kinang sa aming mga mata at ang aming
                        puso ang siyang nagpapahayag kung gaano kami kasabik na muling makita ang isa’t-isa. Sa mga
                        sandaling iyon, bumalik sa aking alaala ang mga taon ng aming kabataan, ang mga biruan,
                        tampuhan, at ang pag-aalaga’t pag-aalala niya sa akin kahit na maliit na bagay.
                    </p>
                </div>
                <div className="page-number">1</div>
            </div>

            {/* PAGE 2 */}
            <div className="page right-page">
                <div className="page-content">
                    <p className="entry-text">
                        Nadarama ko ang pag-asang magbubukas ang bagong yugto sa buhay naming dalawa, lalo na sa
                        nalalapit na salo-salo sa lawa na siyang pagkakataon naming muling magtagpo ni Crisostomo.
                        Pinagdarasal ko na sana ay maging masaya ang araw na iyon at ang mga araw na darating pa at
                        kami’y muling magkaroon ng masayang at hindi malilimutang mga alaala na magpapatunay ng
                        aming pagmamahalan.
                    </p>
                </div>
                <div className="page-number">2</div>
            </div>

            {/* PAGE 3 */}
            <div className="page left-page">
                <div className="page-content">
                    <h3 className="entry-date">13 de noviembre de 1881</h3>
                    <p className="entry-text">
                        Labis na nagdurugo ang aking puso. Nasaksihan ko ang paglukob ng isang madilim na ulap sa
                        kaluluwa ng aking minamahal, na tila pumatay sa ningning ng kanyang mga mata na nais kong muling
                        masilayan. Nalaman ko ang buong katotohanan sa kasawiang sinapit ng kanyang ama, at dahil dito,
                        halos ako ay kapusin sa paghinga. Hindi ko labis na maisip ang sinapit ni Don Rafael, ang
                        butihin at marangal na ama ni Crisostomo. Ito'y isang bangungot! Nagbalik siya sa kanyang bayan
                        upang yakapin ang kanyang mapagmahal na ama, ngunit iba ang kanyang nadatnan kundi pagtangis sa
                        puntod nito na dinungisan ng kasinungalingan. Mag-isa niyang pinasan ang lahat ng pighating ito.
                        Hindi ko kayang makita ang labis na pagdurusa sa kanyang mga mata, at nais kong pawiin ang lahat
                        ng sakit.
                    </p>
                </div>
                <div className="page-number">3</div>
            </div>

            {/* PAGE 4 */}
            <div className="page right-page">
                <div className="page-content">
                    <p className="entry-text">
                        Nais kong payapain ang kalungkutan at maging kanyang kanlungan. Sana’y maramdaman niya na
                        nandito ako palagi para sa kanya. <br/><br/>
                        O, kay lupit ng tadhana ng ipinaako kay Crisostomo, Ang bawat
                        patak ng kanyang luha ay tila kirot na dumarampi sa aking puso. Nais kong yakapin siya at
                        sabihing hindi siya nag iisa, na sa kabila ng lahat, may isang pusong tapat na umaalalay sa
                        kanya. Sa bawat pag-ikot ng araw, ipinagdarasal ko na sana’y matagpuan niya ang kapayapaan na
                        ninakaw sa kanya ng mundo.At sa katahimikan ng gabi, ako’y lumuluhod at taimtim na nananalangin
                        na sana, sa paglipas ng panahon, muling maghilom ang kanyang sugatang puso, at ang alaala ng
                        kanyang ama ay maging gabay sa liwanag ng kanyang bukas.

                    </p>
                </div>
                <div className="page-number">4</div>
            </div>

            {/* PAGE 5 */}
            <div className="page left-page">
                <div className="page-content">
                    <h3 className="entry-date">20 de noviembre de 1881</h3>
                    <p className="entry-text">
                        Ngayong gabi ay hindi ako matahimik. Ang bawat hampas ng hangin sa bintana ay tila paalala ng
                        gulong nangyari mula nang bansagang erehe si Don Rafael. Sa hapag na iyon nagsimula ang lahat,
                        ang galit ni Crisostomo, ang sigawan, at ang sumpang excommunicado na dumapo sa kanya. Hindi
                        niya napatay si Padre Damaso, ngunit tila ako ang hinatulang mamatay sa bawat araw na dumaraan.
                        Simula noon, ang tahanan namin ay nabalot ng katahimikan at ako ay nilamon ng sakit na hindi
                        kayang gamutin ng kahit sino.

                    </p>
                </div>
                <div className="page-number">5</div>
            </div>

            {/* PAGE 6 */}
            <div className="page right-page">
                <div className="page-content">
                    <h3 className="entry-date">25 de noviembre de 1881</h3>
                    <p className="entry-text">
                        Ngunit hindi sakit sa katawan ang bumabagabag sa akin, kundi sa puso. Ang paglayo ni Crisostomo
                        ay parang pagputol ng aking hininga. Sa bawat dasal ko sa gabi, pinipilit kong tanggapin ang
                        kapalarang iniatang sa akin, ang ipakasal kay Linares, ang kamag-anak na sinasabing magliligtas
                        sa dangal ng aming pamilya. Ngunit paano kung hindi ko naman kailangan ng pagliligtas? Paano
                        kung ang gusto ko ay kalayaan? Sa likod ng mga ngiting pilit, nag-aalab ang isang tinig sa aking
                        dibdib na nagsusumigaw ng pagtutol, ngunit takot akong marinig iyon kahit ng sarili ko.
                    </p>
                </div>
                <div className="page-number">6</div>
            </div>

            {/* PAGE 7 */}
            <div className="page left-page">
                <div className="page-content">
                    <h3 className="entry-date">28 de noviembre de 1881</h3>
                    <p className="entry-text">
                        Kinagabihan, kasunod ng pagpasok ni Padre Damaso, napakasama ng kapalarang piniling ihayag sa
                        akin ang gayong katotohanan. Ang aking kaluluwa ay tila napunit sa pagitan ng langit at lupa, at
                        ang aking puso’y nanginginig sa sakit. Ang pinakamalaking kahihiyan ko ngayon ay nag-ugat mula
                        sa taong minsan kong iginagalang bilang isang espirituwal na gabay ay siya palang aking ama. Si
                        Padre Damaso. Paanong ang isang pari…isang lingkod ng Diyos ay makagagawa ng gayong kasalanan at
                        dungisan ang dangal ng aking ina? <br/> <br/>
                        Ngayon alam ko na kung bakit sinabi sa akin ni Tiya Isabel na huwag akong tumulad sa aking ina
                        na ibinalot ang kanyang sarili sa kalungkutan, napagtanto ko na kung bakit siya nagka ganoon.
                        Hindi ko na makilala ang aking sarili.
                    </p>
                    <div className="page-number">7</div>
                </div>
            </div>

            {/* PAGE 8 */}
            <div className="page right-page">
                <div className="page-content">
                    <p className="entry-text">
                        Tuwing tinititigan ko ang repleksiyon ko, nakikita ko lamang ang hiya. Para bang may bahid
                        ang
                        dugong dumadaloy sa aking mga ugat at kasama nito ang pagkawala ng aking pagkatao. <br/>
                        <br/>
                        Ako, anak ng kasalanan. Ano pa ang saysay ng pamumuhay kung ang aking pag-iral ay bunga ng
                        isang
                        paglapastangan? Mas mabuti pa sigurong mawala ako sa mundong ito kaysa magdusa sa kahihiyang
                        ito. Hangad ko ang kapayapaan, ngunit napakalayo ng langit sa aking mga panalangin.
                        Humihingi
                        ako ng tawad sa Panginoon, ngunit paano ko patatawarin ang aking sarili kung pasan ko ang
                        kasalanan ng aking ama at ang sakit na pinasan ng aking ina?
                    </p>
                </div>
                <div className="page-number">8</div>
            </div>

            {/* PAGE 9 */}
            <div className="page left-page">
                <div className="page-content">
                    <p className="entry-text">
                        Sa bawat araw na nagdaan, umaasa ako na siya’y babalik. Ni anino man lang niya ay hindi ko
                        nakita, o kahit man lang sana bumulong siya sa hangin upang maramdaman ko na ako’y iniisip
                        pa
                        rin niya… ngunit wala. Bakit wala? Bakit mo ginagawa ito sa akin, Crisóstomo? Dahil ba hindi
                        kita naipagtanggol? Dahil ba wala ka nang mukhang maihaharap sa aking ama? Matapos ang
                        nangyari,
                        hindi mo na ba nais pang bumalik kaya’t ako’y iniwan mo na lamang dito, sa mga taong walang
                        ibang alam kundi ang makialam sa mga bagay na alam nilang hindi naman makapagpapaligaya sa
                        akin?
                        Nais ko lamang maunawaan ang dahilan kung bakit mo ako iniwan ng ganito. Ayokong mawala ka.
                        Nakikiusap ako, bumalik ka sa akin, kahit saglit.
                    </p>
                </div>
                <div className="page-number">9</div>
            </div>

            {/* PAGE 10 */}
            <div className="page right-page">
                <div className="page-content">
                    <h3 className="entry-date">1 de diciembre de 1881</h3>
                    <p className="entry-text">
                        Ngayong nalaman kong nalunod daw si Crisostomo, parang tuluyang gumuho ang mundo ko. Wala na
                        akong makakapitan kundi ang Diyos at ang mga pader ng kumbento. Kaya nang ako ay papiliin ni
                        Padre Damaso, kasal o kamatayan, hindi ako nag-atubiling piliin ang pagtalikod sa mundo. Mas
                        pipiliin kong mamatay bilang ako kaysa mabuhay bilang alipin ng kagustuhan ng ibang tao.
                    </p>
                </div>
                <div className="page-number">10</div>
            </div>

            {/* PAGE 11 */}
            <div className="page left-page">
                <div className="page-content">
                    <h3 className="entry-date">2 de diciembre de 1881</h3>
                    <p className="entry-text">
                        Ngayon, habang isinusulat ko ito sa katahimikan ng gabi, nararamdaman ko pa rin ang kirot ng
                        pagkawala at ang bigat ng takot na aking tinaglay. Ngunit sa ilalim ng lahat ng ito, may
                        munting
                        alab ng kalayaan, isang tahimik na paghihimagsik ng pusong nagmahal nang labis at ngayo’y
                        natutong tanggapin ang sariling kapalaran, kahit sa anyo ng pagdurusa.
                    </p>
                </div>
                <div className="page-number">11</div>
            </div>

            {/* PAGE 12 */}
            <div className="page right-page">
                <div className="page-content">
                    <h3 className="entry-date">23 de diciembre de 1881</h3>
                    <p className="entry-text">
                        Hindi ko ubos maunawaan kung bakit ako’y nagsusulat ngayon. Marahil gusto ko lamang marinig
                        muli
                        ang sarili kong tinig at boses kahit sa tinta at papel na lamang. Tahimik na naman ang
                        kumbento
                        na tila’y pati ang hangin ay takot gumalaw. Sa bawat pintig ng puso ko’y may bigat na hindi
                        ko
                        mabitawan, marahil dahil wala na akong ibang mapagsabihan ng aking mga takot kundi ang mga
                        pahinang ito. Ang mga pader ng kumbento’y nababalot ng lamig at nakakabinging katahimika na
                        para
                        bang tanikalang dahan-dahang humihigpit sa aking katawan. Nais kong maniwalang tama ang
                        pagpasok
                        ko rito ngunit sa bawat na dumaraan, si Crisostomo pa rin ang alaala kong hindi matakasan.
                        Kung
                        ito man ang landas na itinakda sa akin, tinatanggap ko ngunit sa loob kong ito, may bahaging
                        hindi na muling dadapuan ng liwanag.
                    </p>
                </div>
                <div className="page-number">12</div>
            </div>

            {/* PAGE 13 */}
            <div className="page left-page">
                <div className="page-content">
                    <p className="entry-text">
                        Pumasok ako rito upang iligtas ang sarili ko mula sa mga kasinungalingan ng mundo, sa mga
                        matang
                        humuhusga at sa mga bulungang nagbabalatkayo. Akala ko’y sa loob ng mga pader na ito,
                        makakalimutan ko si Ibarra. Akala ko’y, ang dasal ay gamot sa lahat ng sugat. Ngunit ngayong
                        gabi, habang hawak ko ang rosaryo, tanging ngalan pa rin niya ang sumasabay sa bawat dasal
                        ko. <br/> <br/>
                        Sinasabi nilang dito ko mararamdaman ang Diyos, ngunit bakit tila napakalayo niya. Minsan
                        ako’y
                        napapaisip, baka nga hindi siya ang lumayo kundi ako. Baka ako na ang tumigil maniwala. At
                        sa
                        bawat sandaling ito, habang ako’y nakaluhod sa harap ng altar, ramdam kong unti-unting
                        lumulubog
                        ang dating pananampalatayang kumupkop sa akin. Kung dati, sapat na ang isang bulong upang
                        makahanap ako ng lakas, ngayon kahit ang pinakamalalim kong dasal ay parang walang
                        pinatutunguhan.
                    </p>
                </div>
                <div className="page-number">13</div>
            </div>

            {/* PAGE 14 */}
            <div className="page right-page">
                <div className="page-content">
                    <p className="entry-text">
                        Kung ito na ang huli kong pagsulat, tinatanggap ko. Ako’y hindi banal, hindi rin ako masama.
                        Isa
                        lang akong babaeng nasaktan at napagod magmahal. Paalam sa mundo. Paalam sa liwanag. At kung
                        sakali mang naririnig ako ng Diyos kahit minsan pa, sana’y patawarin niya ako sa kung ano
                        mang
                        maaari kong magawa sa mga darating na araw.
                    </p>
                </div>
                <div className="page-number">14</div>
            </div>

            {/* AUTHOR'S NOTES */}
            <div className="page left-page">
                <h1 className="notes-header">AUTHOR'S NOTES</h1>
                <div className="page-content notes-text">
                    This diary of Maria Clara is a creative reconstruction inspired by José Rizal’s Noli Me Tángere.
                    While the events and timeline follow the novel, the diary format, reflections, and dates are
                    imagined to bring readers closer to her inner life. This project could not have been completed
                    without the collaboration and dedication of our team members.
                </div>
                <div className="page-number">15</div>
            </div>

            {/* CONTRIBUTIONS PAGE */}
            <div className="page right-page">
                <h1 className="contributions-header">CONTRIBUTIONS</h1>
                <div className="contributions-text">
                    <div className="section-title">Diary Entries:</div>
                    <p>
                        Ramirez, John Gabriel S.<br/>
                        Rebadulla, Lance Patrick A.<br/>
                        Roces, Raiza A.<br/>
                        Salva, Alvin A.<br/>
                        Santiago, John Francis Ephraim A.<br/>
                        Soriano, James Carl E.<br/>
                        Valdez, John Paul A.<br/>
                        Valiente, Aaron Mark D.<br/>
                        Vallejos, Glaiza C.<br/>
                        Valmores, Jomari Roderick B.<br/>
                        Vergara, Joshua Miguel M.
                    </p>

                    <br/>

                    <div className="section-title">Diary Production:</div>
                    <p>
                        Salayo, Heaven Grace D.<br/>
                        Zamora, Princess Jumiah M.
                    </p>
                </div>
                <div className="page-number">16</div>
            </div>

            {/* BACK COVER PAGE */}
            <div className="cover" style={{background: 'transparent'}}>
                <div className="page-content back-cover-page"></div>
            </div>
        </HTMLFlipBook>
    );
}

export default Book;
