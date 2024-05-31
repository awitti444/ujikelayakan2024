export default function Title({ name, page, lang }) {
    return (
        <>
        <h1 className="text-white">Nama : {name}</h1>
        <p className="text-white">Page : {page}</p>
        <p className="text-white">Languange : {lang}</p>
        </>
    )
}

// export default function Title(props) {
//     return (
//         <>
//         <h1 className="text-white">Nama : {props.name}</h1>
//         <p className="text-white">Page : {props.page}</p>
//         <p className="text-white">Languange : {props.lang}</p>
//         </>
//     )
// }