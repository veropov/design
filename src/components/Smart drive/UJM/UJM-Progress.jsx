import Header from "../../../lib/header"
import { EmotionArea } from "../../area/emotion-area";
import { FigmaContainerArea } from "../../area/figma-area";
import { TextAreaVert3, TextAreaVert2 } from "../../area/text-area-vert";
import { StateBanner } from "../../banner/banner"
import ujmImg from '../../banner/img banner/UJM-Back.jpg';
import smartHome from '../../banner/img banner/UJM-Home.png';
import { BottomNavigation } from "../../bottom navigation/bottom-navigation";
import progress1 from '../../video/progress1.mp4';
import progress2 from '../../video/progress2.mp4';


export const UJMProgress = () => {


    const banner = new StateBanner(
        'Smart drive',
        'Карта прогресса вождения',
        '',
        ujmImg,
        smartHome,
        'smartImg'
    )

    return (
        <div className="container">
        <Header />
            <div className="main">
            <div className="container_main-1">
                {banner.StateDots()}
                <div className="container_text_main">
                    <EmotionArea 
                        name={'График вождения'} 
                        title={'Эмоции'} 
                        title2={'Улучшения'} 
                        happeTitle={'Доволен цветовым решением с нюансом о критериях.'} 
                        conusedTitle={'В замешательстве, так как не понимает, зачем в интерфейсе нужен пустой график вождения.'} 
                        angryTitle={'Недоволен из-за отсутствия информации о критериях вождения. Критерии вождения имеют одинаковый цвет.'} 
                        pencilTitle={'Критерии вождения убраны из слайдера и вынесены в отдельный компонент. Изменен цвет фона и иконок критериев вождения.'} 
                        codeTitle={"График вождения не изменен, так как нет возможности проверить его функциональность."} 
                        video={progress1}                        
                    />
                    <EmotionArea 
                        name={'Карта, критерии вождения'} 
                        title={'Эмоции'} 
                        title2={'Улучшения'} 
                        happeTitle={'Чувствует спокойствие, так как карта поездки похожа на гугл карты. '} 
                        conusedTitle={'Не понимает, зачем нужен договор с ARX и почему нельзя пользоваться приложением без него.'} 
                        angryTitle={'В замешательстве, так как после вынесения критериев в отдельные компоненты интерфейс стал перегружен элементами.'} 
                        pencilTitle={'Добавлены подробности каждого критерия и карта вождения. '} 
                        codeTitle={"Карта вождения не изменена, так как нет возможности проверить ее функциональность."} 
                        video={progress2}                        
                    />
                </div>
                <BottomNavigation 
                    subTitleP={'Вернуться в '} 
                    subTitleB={'User Journey Map'} 
                    subTitleP2={'Перейти к '} 
                    subTitleB2={'Истории вождения'}
                    enter={'/smart-drive/ujm'}
                    back={'/smart-drive/ujm/history'}
                />
                </div>
            </div>
        </div>
    )
}