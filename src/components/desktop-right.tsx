import DesktopRightCover from '@/components/desktop-right-cover'
import DesktopRightWelcoming from '@/components/desktop-right-welcoming'
import { useState } from 'react'

export default function DesktopRight() {
    const [show, setShow] = useState(false)
    return (
        <>{ (show)
                ? <DesktopRightWelcoming />
                : <DesktopRightCover invToggle={() => setShow(true)}/>
        }
        </>
    )
}