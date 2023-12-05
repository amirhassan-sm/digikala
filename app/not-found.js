import Link from 'next/link'

export default function NotFound() {
    return (
        <div style={{ display: "flex",flexDirection:"column", alignItems: "center", justifyContent: "center" }}>
            <div> <h2 style={{ fontSize: "larger", margin:"10px" }}>صفحه ای که دنبال ان بودید پیدا نشد </h2></div>

            <div><Link href="/">صفحه ی اصلی</Link></div>
        </div>
    )
}