import css from './Loader.module.css'
import { ColorRing } from 'react-loader-spinner'

export default function Loader ({isLoading}) {
    return (
        <div className={css.loaderWrapper}>
            <ColorRing
                visible={isLoading}
                height="80"
                width="80"
                ariaLabel="color-ring-loading"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
        </div>
    )
}