import { Link } from "remix";

export default function LinkButton({ to, destructive = false, children }) {
    let className = "rounded-md bg-sky-500 p-5 font-medium text-xl hover:bg-sky-700";
    if(destructive){
        className += "button-destructive";
    }
        return(
            <Link className={className} to={to}>
                {children}
            </Link>
        );

}