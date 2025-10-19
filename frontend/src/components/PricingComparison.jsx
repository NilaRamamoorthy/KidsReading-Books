// components/PricingComparison.jsx
import { Link } from "react-router-dom";
export default function PricingComparison() {
  return (
    
<section className="bg-[#cceaf6] py-16 px-4 md:px-10">
  <div className="max-w-6xl mx-auto grid grid-cols-3 gap-x-6 text-[#001b57] text-sm md:text-base">

    {/* Column 1: Feature Titles */}
    <div className="space-y-6 font-medium py-6 w-full max-w-[400px]">
      <div></div> {/* Spacer */}
      <div>BookChat with the ones you love</div>
      <div>
        Full Library access <br />
        <span className="text-xs text-gray-600">(over 1,000 books and counting!)</span>
      </div>
      <div className="flex items-start gap-1">
        Create customized bookshelves 
        <span className="ml-1 cursor-pointer text-xs">ℹ️</span>
      </div>
      <div className="flex items-start gap-1">
        Bookmarks 
        <span className="ml-1 cursor-pointer text-xs">ℹ️</span>
      </div>
      <div>
        <div className="flex items-start gap-1">
          Share Gold with 4 others 
          <span className="ml-1 cursor-pointer text-xs">ℹ️</span>
        </div>
        <span className="text-xs text-gray-600">(They’ll have full Gold plan benefits)</span>
      </div>
      <div>Price</div>
      <div></div> {/* Spacer */}
    </div>

    {/* Column 2: Free Plan Card */}
    <div className="bg-white rounded-xl p-6 flex flex-col text-center w-auto shadow-md">
      <h3 className="text-lg font-bold mb-6">Free Plan</h3>
      <div className="flex flex-col gap-6 flex-grow justify-between">
        <div className="text-2xl">✅</div>
        <div className="text-sm">
          <strong>Limited</strong>
          <span className="ml-1 text-xs cursor-pointer">❓</span><br />
          <span className="text-xs text-gray-600">(5 books rotate monthly)</span>
        </div>
        <div className="text-2xl text-red-600">❌</div>
        <div className="text-2xl text-red-600">❌</div>
        <div className="text-2xl text-red-600">❌</div>
        <div>
          <p className="text-sm">FREE</p>
          <p className="font-bold text-lg">Forever</p>
        </div>
      </div>
      <div className="mt-6">
        <Link to="/library">
  <button className="border border-[#001b57] text-[#001b57] px-6 py-2 rounded font-bold hover:bg-[#001b57] hover:text-white transition">
    STAY FREE
  </button>
</Link>
      </div>
    </div>

    {/* Column 3: Gold Plan Card */}
    <div className="bg-white rounded-xl p-6 flex flex-col text-center w-full shadow-md">
      <h3 className="text-lg font-bold mb-6">Gold Family Plan</h3>
      <div className="flex flex-col gap-6 flex-grow justify-between">
        <div className="text-2xl text-green-600">✅</div>
        <div className="text-2xl text-green-600">✅</div>
        <div className="text-2xl text-green-600">✅</div>
        <div className="text-2xl text-green-600">✅</div>
        <div className="text-2xl text-green-600">✅</div>
        <div className="text-sm">
          $14.99/monthly<br />
          <span className="font-bold text-lg">$99.99/annually</span>
        </div>
      </div>
      <div className="mt-6">
        <button className="bg-[#ff7f2a] text-white px-6 py-2 rounded font-bold hover:bg-[#e46c1e] transition">
          FAMILY GOLD
        </button>
      </div>
    </div>
    
  </div>
</section>


  );
}
