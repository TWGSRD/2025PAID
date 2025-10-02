const providers = [
    // 1. Payoneer - 金流服務
    {
        name: "Lucas",
        company: "Payoneer",
        service_type: "金流服務",
        offer_description: "• Payoneer 新用戶\ni. 前3個月免提領手續費 (由第一次交易當月起算三個月)\nii. Payoneer 專屬人工客服專員, 快捷貼心服務 (商戶須具備亞馬遜收款月GMV 30萬USD)\niii. 大中華區內Payoneer帳號互轉12個月0費率\niv. 1v1跨境支付諮詢服務\n\n• Payoneer 現有賣家:\ni. 大中華區內Payoneer帳號互轉12個月內0費率 (包含中國大陸, 台灣香港與澳門)\nii. 1v1跨境支付諮詢服務\niii. 聯繫客戶經理訂製專屬優惠費率\n\n立即填表單開通優惠: https://reurl.cc/EQ565A",
        company_intro: "Payoneer（NASDAQ: PAYO）成立於2005年，總部位於美國紐約，是全球領先的跨境支付平台。服務涵蓋190+國家與地區、150+幣別，提供電商賣家、自由工作者與企業多幣別收款帳戶、供應商付款、跨境轉帳及Mastercard卡片。Payoneer以合規安全、費率透明與操作便利著稱，協助用戶降低跨境金流成本並提升全球業務效率。",
        website: "https://www.payoneer.com/",
        phone: "0909604190",
        line_id: "lucas0122",
        email: "lucashs@payoneer.com",
        logo: "Payoneer_China_Master_Logo_OnWhite_RGB (2) - lucas hsu.jpg"
    },
    // 2. 尋匯Sunrate - 金流服務
    {
        name: "洪銘言 Frank",
        company: "尋匯Sunrate",
        service_type: "金流服務",
        offer_description: "專案優惠手續費0.35%",
        company_intro: "尋匯SUNRATE創立於2016年，全球業務總部位於新加坡，致力於為企業提供安全、高效的全球支付與財資管理解決方案。公司與花旗、渣打等國際頂級銀行達成合作，並取得了Mastercard和Visa的主會員資質，同時也是亞馬遜SPN服務商。依託自主研發的強大技術引擎、廣泛的支付網路與定制化API方案，尋匯SUNRATE助力企業在190+國家及地區開展業務。",
        website: "https://www.sunrate.com/",
        phone: "0971753892",
        line_id: "soramisu",
        email: "frank.hung@sunrate.com",
        logo: "尋匯SUNRATE - Ming Yen Hung.png"
    },
    // 3. Getida - FBA審計與賠付
    {
        name: "AJ Fang",
        company: "Getida",
        service_type: "FBA審計與賠付",
        offer_description: "首次 USD800審計退款零服務費 (原服務費約25%)",
        company_intro: "Getida是一家2015年成立在美國專注於亞馬遜FBA審計的公司，同時也是亞馬遜的SPN。透過先進的數據科技與審核系統，Getida能協助賣家檢測並追回亞馬遜平台中因錯誤或遺漏而造成的費用損失。服務範疇涵蓋庫存管理、物流錯誤、退款差異等，讓賣家有效降低成本並提升利潤。Getida以透明、專業與高效率著稱，致力於成為亞馬遜賣家值得信賴的夥伴",
        website: "https://getida.com/",
        email: "aj@getida.com",
        logo: "GETIDA_Logo_2000x500.png"
    },
    // 4. Return Helper - 逆物流
    {
        name: "Paul Yang",
        company: "Return Helper",
        service_type: "逆物流",
        offer_description: "• 新客戶開帳號後贈送Return Helper系統$300額度\n• 第一票fulfillment免倉租30天\n• 專屬客服經理服務",
        company_intro: "Return Helper 專注於跨境電商退貨與庫存管理，服務涵蓋 FBA 移除代收、庫存清點、重新處理與貼標，以及多國移倉。我們協助賣家將高達 70% 的退貨商品重新包裝再售，有效降低損耗並提升庫存週轉效率，致力於解決跨境營運最棘手的售後挑戰，成為賣家在全球市場持續成長的可靠後盾。",
        website: "https://www.returnhelper.com.tw/",
        phone: "0983406811",
        email: "paul.yang@returnhelper.com",
        logo: "Return Helper.png"
    },
    // 5. 靈志科技有限公司 - 短影音
    {
        name: "吳廷萱",
        company: "靈志科技有限公司",
        service_type: "短影音",
        offer_description: "基礎套餐(NTD 26,000 起)\n• 基礎創意策劃\n• 1x45秒廣告視頻\n• 白／灰單色普通場景\n• 1名出鏡模特\n\n標準套餐(NTD 48,500 起)\n• 標準創意策劃\n• 1x45秒廣告視頻\n• 生活場景精品場景\n• 1名出鏡模特\n👉 推薦作為 SBV 或 SDV\n\n精品套餐(NTD 115,000 起)\n• 精品創意策劃\n• 1x15-30秒流媒體廣告\n• 影片媒體廣告團隊\n• 配置及製作多名模特特出鏡\n👉 推薦作為 STV\n\n全部在地外模，國外拍攝，最大程度貼合當地市場的接受度\n\n賣家成長服務賣家加碼優惠：\n每支影片免費加贈剪輯 1 支 15 秒內短版本（可作為其他內容營銷使用）",
        company_intro: "靈志科技是Chance Creative在台灣地區成立的運營實體，而Chance Creative是亞馬遜全球認證的Amazon Ads Verified Partner，在品牌出海的多媒體/短影音拍攝領域擁有豐富的經驗和專業知識，特別是面對國際市場的品牌/商品定位與賣點提煉、行銷素材(平面/影片)拍攝和影音廣告投放規畫部分，能夠為客戶提供高品質的服務。",
        website: "ChanceSight.com",
        phone: "0960197960",
        line_id: "lindawu1969",
        email: "lindawu1969@gmail.com",
        logo: "靈志科技 Logo - 吳亭萱(1).png",
        discount_image: "靈智.png"
    },
    // 6. WotoHub網紅平台 - 站外導流
    {
        name: "Lucia Chang",
        company: "WotoHub網紅平台",
        service_type: "站外導流",
        offer_description: "站內通訊額度提升至1萬則",
        company_intro: "WotoHub海外網紅智能行銷雲，由WotoKOL臥兔自主研發的海外網紅行銷利器，匯集全球六千萬活躍海外網紅資源，涵蓋YouTube、TikTok、Instagram三大核心平台，協助賣家解決從入門到佈局海外網紅行銷的全鏈路問題，與帶貨網紅緊密連動，快速實現品牌效益合一。",
        website: "https://www.wotokol.com/wotohub",
        email: "lucia@wotokol.com",
        logo: "Wotokol logo.png"
    },
    // 7. adHub經緯廣告 - 站外導流
    {
        name: "Joanna Li",
        company: "adHub經緯廣告",
        service_type: "站外導流",
        offer_description: "Google/Meta廣告\n• 自營投廣: 廣告服務費降至2.5% (原3%)\n• 廣告代操: 服務費最低至15% (季投遞額30萬以上)",
        company_intro: "adHub經緯廣告",
        website: "https://www.ad-hub.net/",
        phone: "(02)6631-5652",
        email: "joanna@ad-hub.net",
        logo: "adHub logo.png"
    }
];
