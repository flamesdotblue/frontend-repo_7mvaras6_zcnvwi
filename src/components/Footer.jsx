export default function Footer() {
  return (
    <footer className="mt-10 border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-sm bg-red-700 grid place-content-center text-white font-black">IN</div>
            <span className="text-lg font-extrabold">IndiaOnNews</span>
          </div>
          <p className="mt-3 text-sm text-gray-600 max-w-sm">
            NDTV-inspired news experience — bold headlines, modular layout, videos and live widgets.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-gray-900">Company</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li><a className="hover:text-red-700" href="#">About</a></li>
            <li><a className="hover:text-red-700" href="#">Terms</a></li>
            <li><a className="hover:text-red-700" href="#">Privacy</a></li>
            <li><a className="hover:text-red-700" href="#">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-gray-900">Get the App</h4>
          <div className="mt-3 grid grid-cols-2 gap-3 max-w-xs">
            <a href="#" className="rounded-md border border-gray-200 p-3 hover:border-red-700">
              <div className="text-xs text-gray-500">Download on</div>
              <div className="font-bold">App Store</div>
            </a>
            <a href="#" className="rounded-md border border-gray-200 p-3 hover:border-red-700">
              <div className="text-xs text-gray-500">Get it on</div>
              <div className="font-bold">Google Play</div>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 py-4 text-center text-xs text-gray-600">
        © {new Date().getFullYear()} IndiaOnNews. All rights reserved.
      </div>
    </footer>
  );
}
