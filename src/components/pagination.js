import classNames from "classnames";

function PageItem(props) {
    const { children, href, disabled } = props;
    const itemClasses = classNames({
        [`disabled`]: disabled || !href,
    }, 'page-item')
    return (
        <li className={itemClasses}>
            <a className="page-link" href={href}>
                <span>{children}</span>
            </a>
        </li>
    );
}

export default function Pageination(props) {
    let { current, pageSize, total, pathname } = props;
    let { firstLableText, pageLableText, lastLableText } = props;
    console.log('fir', firstLableText);
    current = parseInt(current);
    pageSize = parseInt(pageSize);
    total = parseInt(total);
    let start = (current * pageSize) -  (pageSize - 1);
    let end = start + pageSize - 1;
    let maxpage = ()=>{
        let pn = parseInt(total / pageSize);
        let mod = total % pageSize;
        if (mod > 0) {
            pn += 1;
        }
        return pn;
    }
    const firstDisabled = ()=>{
        return current <= 1;
    };
    const privPageDisabled = ()=>{
        return current <= 1;
    };
    const nextPageDisabled = ()=>{
        return current >= maxpage();
    };
    const lastPageDisabled = ()=>{
        return current >= maxpage();
    };
    return (
        <div className="d-flex align-items-center">
            <p className="m-0 text-muted">
                Showing
                <span> {start} </span> to <span> {end} </span> of
                <span> {total} </span> entries
            </p>
            <ul className="pagination m-0 ms-auto">
                <PageItem href={`${pathname}?p=1`} 
                disabled={firstDisabled()}>
                    {firstLableText||'First'}
                </PageItem>
                <PageItem href={`${pathname}?p=${current-1}`} 
                disabled={privPageDisabled()}>
                    &laquo;
                </PageItem>
                <PageItem>
                    {pageLableText||'Page'} {current}
                </PageItem>
                <PageItem href={`${pathname}?p=${current+1}`} 
                disabled={nextPageDisabled()}>
                    &raquo;
                </PageItem>
                <PageItem href={`${pathname}?p=${maxpage()}`}
                 disabled={lastPageDisabled()}>
                    {lastLableText||'Last'}
                </PageItem>
            </ul>
        </div>
    );
}