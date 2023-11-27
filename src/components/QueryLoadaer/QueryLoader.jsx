import style from './queryLoader.module.css'


const QueryLoader = (props) => {

    const { children, error, fetching } = props;
    return (
        <div className={style['common']}>
            <div>
                {fetching && 'Data is loading...'}
                {error && `Ooopps we have a error: ${error}`}
            </div>
            { (!error && !fetching) && children}
        </div>
    )
}

export default QueryLoader;