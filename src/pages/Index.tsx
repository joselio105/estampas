import { PageHeader } from '../components/PageHeader';
import { PageRoot } from '../components/PageRoot';
import { PageMain } from '../components/PageMain';
import { Image } from '../components/Image';
import { authorize, listFiles} from '../components/GoogleDriveQuickStart'
import {useEffect} from 'react'
// import { GooglePicker } from '../components/GooglePicker';

// TODO: Efeito ao rolar tela para baixo
// TODO: Carregar arquivos do google drive ->  https://www.npmjs.com/package/react-gapi

export function Index(){
    
    useEffect(()=>{
        authorize().then(listFiles).catch(console.error)
    }, [])
    return (
        <PageRoot>
            <PageHeader />
            {/* <GooglePicker /> */}
            <PageMain>
                <Image span={4} src="https://source.unsplash.com/1200x800/?cat" alt="random image" />                
                <Image span={1} src="https://source.unsplash.com/1200x800/?pig" alt="random image" />                
                <Image span={1} src="https://source.unsplash.com/1200x800/?mouse" alt="random image" />
                <Image span={3} src="https://source.unsplash.com/1200x800/?dog" alt="random image" />
                <Image span={2} src="https://source.unsplash.com/1200x800/?bird" alt="random image" />
                <Image span={2} src="https://source.unsplash.com/1200x800/?horse" alt="random image" />
                <Image span={1} src="https://source.unsplash.com/1200x800/?fish" alt="random image" />
                <Image span={1} src="https://source.unsplash.com/1200x800/?panda" alt="random image" />
                <Image span={1} src="https://source.unsplash.com/1200x800/?sea" alt="random image" />
                {/*
                    <Image span={4} src="https://source.unsplash.com/1200x800/?moon" alt="random image" />
                    <Image span={2} src="https://source.unsplash.com/1200x800/?sun" alt="random image" />
                    <Image span={2} src="https://source.unsplash.com/1200x800/?star" alt="random image" />
                    <Image span={4} src="https://source.unsplash.com/1200x800/?cloud" alt="random image" />
                */}
            </PageMain>
        </PageRoot>
    )
}
