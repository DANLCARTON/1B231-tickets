import Link from "next/link"

export default function NotFound() {
    return (
        <main className="text-center">
            <h2 className="text-3x1">There was a problem : Error 404</h2>
            <p>We could not find the page you were looking for. </p>
            <p><Link href="/tickets" >Go back to the Tickets</Link></p>
        </main>
    )
}