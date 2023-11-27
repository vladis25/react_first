import styles from './borderWrapper.module.css'

const BorderWrapper = (props) => {
     const { children, showDefaultText } = props;
    return(
        <div className={styles['common']}>
            { showDefaultText ? 'default text...' : children }
        </div>
    )
}

export default BorderWrapper;