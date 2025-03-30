export default function Button({ label, px, py, submit = false, onClick }) {
    if (onClick) {
        return (
            <button
                type="button" 
                onClick={onClick} 
                className={`bg-main-yellow-color text-white font-bold rounded-sm ${py} ${px} hover:bg-main-text-color transition-all text-sm cursor-pointer `}
            >
                {label}
            </button>
        );
    }
    switch (submit) {
        case true: {
            return (
                <button
                    type="submit"
                    className={`bg-main-yellow-color text-white font-bold rounded-sm ${py} ${px} hover:bg-main-text-color transition-all text-sm cursor-pointer `}
                >
                    {label}
                </button>
            );
        }
        case false: {
            return (
                <button
                    className={`bg-main-yellow-color text-white font-bold rounded-sm ${py} ${px} hover:bg-main-text-color transition-all text-sm cursor-pointer `}
                >
                    {label}
                </button>
            );
        }
    }
}
