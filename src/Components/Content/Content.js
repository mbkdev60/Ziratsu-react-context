import React, {useContext} from 'react'
import BtnToggle from '../BtnToggle/BtnToggle'
import './Content.css'
import { ThemeContext } from '../../Context/ThemeContext'

export default function Content() {

    const {theme} = useContext(ThemeContext)

    console.log(theme);

  return (
    <div className='container'>
        <BtnToggle />
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p className="content-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi expedita asperiores optio libero explicabo reiciendis odio totam ipsa similique aut deleniti provident incidunt illum ducimus perspiciatis doloremque quod dolorem voluptatibus, dignissimos, ad sint suscipit nam assumenda nihil? Deserunt impedit nam rem officia expedita odio, inventore repellendus placeat explicabo error nostrum perferendis fuga esse facere ratione quae temporibus, quo voluptas ea? In debitis, distinctio laboriosam ratione dolorum veritatis hic earum possimus, pariatur perspiciatis ducimus dolor ipsa repellat praesentium commodi, officia architecto veniam. Amet debitis, reiciendis velit magnam aperiam magni cupiditate mollitia nemo ab tempore eligendi, dignissimos harum. Dolor qui molestias beatae quae quod saepe et laborum aliquid officiis! Enim perspiciatis numquam, ipsum quod deserunt accusamus vel ab officia voluptate illum ipsam cumque illo dolores consectetur itaque, nisi eveniet aliquam. Nulla numquam accusantium velit delectus, ex ipsam soluta alias aperiam asperiores quisquam tenetur itaque facilis. Quidem impedit soluta enim, facilis eos deserunt aperiam? Facilis aliquam voluptatum, pariatur nostrum natus cum eveniet porro. Culpa nobis accusantium ipsam eius similique maiores inventore provident tempora nulla dolor facilis saepe quae nisi, neque aspernatur officiis illum quasi vel pariatur sed quas autem? Accusantium cupiditate optio doloribus voluptates eveniet, consequuntur fugit, pariatur itaque rerum qui, perspiciatis similique.</p>
    </div>
    
  )
}
