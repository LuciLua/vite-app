function Li(props: any) {
    const { children, href, onclick, className } = props
    return (
        <li onClick={onclick} className={className}>
            <a href={href} title={children}>
                {children}
            </a>
        </li>
    )
}

export default Li