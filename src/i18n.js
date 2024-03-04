import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    //navbar
                    home: "Home",
                    science: "Science",
                    'about us': "About Us",
                    news: "News",
                    career: "Career",
                    'contact us': "Contact Us",
                    //footbar
                    'privacy statement': 'Privacy Statement',
                    'cookie policy': 'Cookie Policy',
                    //
                    about: 'About',
                    name: 'Name',
                    'phone number': 'Phone Number',
                    email: 'Email',
                    address: 'Address',
                    References: 'References',
                    'curriculum vitae': 'Curriculum Vitae',
                    'degree certificate': 'Degree Certificate',
                    'other certificates': 'Other Certificates',
                    remove: 'Remove',
                    'total file size': 'Total File Size',
                    'max file size': 'Max File Size',
                    size: 'Size',
                    action: 'Action',
                    'send application': 'Send Application',
                },
            },
            kr: {
                translation: {
                    //navbar
                    home: "집",
                    science: "과학",
                    'about us': "회사 소개",
                    news: "소식",
                    career: "직업",
                    'contact us': "문의하기",
                    //footbar
                    'privacy statement': '개인 정보 보호 정책',
                    'cookie policy': '쿠키 정책',
                    //
                    about: '에 대한',
                    name: '이름',
                    'phone number': '전화 번호',
                    email: '이메일',
                    address: '주소',
                    references: '참고자료',
                    'curriculum vitae': '이력서',
                    'degree certificate': '학위 증명서',
                    'other certificates': '기타 인증서',
                    remove: 'Remove',
                    'total file size': '총 파일 크기',
                    'max file size': '최대 파일 크기',
                    size: '크기',
                    action: '행동',
                    'send application': '신청서 보내기',
                },
            },
        },
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
