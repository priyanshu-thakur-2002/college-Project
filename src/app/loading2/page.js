export default function LoadingPage(){
    return (
        <>
        <span className="loading loading-dots loading-lg m-auto block"/>
        
        <svg width="120" height="30" xmlns="http://www.w3.org/2000/svg">
        <circle cx="15" cy="15" r="10" fill="#007BFF">
            <animate attributeName="opacity" from="1" to="0" dur="1s" begin="0s" repeatCount="indefinite" />
        </circle>
        <circle cx="60" cy="15" r="10" fill="#007BFF">
            <animate attributeName="opacity" from="1" to="0" dur="1s" begin="0.1s" repeatCount="indefinite" />
        </circle>
        <circle cx="105" cy="15" r="10" fill="#007BFF">
            <animate attributeName="opacity" from="1" to="0" dur="1s" begin="0.2s" repeatCount="indefinite" />
        </circle>
        </svg>

        </>
    );
}