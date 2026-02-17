export default function Footer() {
    return (
        <footer className="bg-sakura-gray text-foreground py-12 px-6 md:px-12 mt-20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                    <h2 className="text-2xl font-bold font-heading">Portfolio.</h2>
                    <p className="text-sm opacity-70">© {new Date().getFullYear()} All rights reserved.</p>
                </div>
                <div className="flex gap-6 text-sm font-medium">
                    <a href="#" className="hover:text-coral transition-colors">Twitter</a>
                    <a href="#" className="hover:text-coral transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-coral transition-colors">GitHub</a>
                </div>
            </div>
        </footer>
    );
}
