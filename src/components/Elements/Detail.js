function Detail() {
  return (
    <div className="w-[90%] bg-indigo-50 bg-opacity-50 rounded-[12px] my-[5%] mx-auto font-semibold text-left text-blue-700">
      <div className="w-[90%] mx-auto opacity-100 md:text-[2vw] lg:text-[1.1rem] text-[3vw]">
        <p className="p-2">
          🧑 Name:{" "}
          <span className="text-black hover:underline decoration-2 decoration-blue-700">
            Dương Nhật Minh
          </span>
        </p>
        <hr className="border-0 h-[1px] bg-black"></hr>
        <p className="p-2">
          🏡 Hometown:{" "}
          <span className="text-black hover:underline decoration-2 decoration-blue-700">
            Đà Lạt
          </span>
        </p>
        <hr className="border-0 h-[1px] bg-black"></hr>
        <p className="p-2">
          🎂 Birthday:{" "}
          <span className="text-black hover:underline decoration-2 decoration-blue-700">
            09/08/1997
          </span>{" "}
        </p>
        <hr className="border-0 h-[1px] bg-black"></hr>
        <p className="p-2">
          ♌ Zodiac:{" "}
          <span className="text-black hover:underline decoration-2 decoration-blue-700">
            Leo
          </span>
        </p>
        <hr className="border-0 h-[1px] bg-black"></hr>
        <p className="p-2">
          👟 Sport:{" "}
          <span className="text-black hover:underline decoration-2 decoration-blue-700">
            Soccer, Badminton
          </span>
        </p>
        <hr className="border-0 h-[1px] bg-black"></hr>
        <p className="p-2">
          🕑 Hobby:{" "}
          <span className="text-black hover:underline decoration-2 decoration-blue-700">
            Reading books, Playing games, Practicing piano
          </span>
        </p>
      </div>
    </div>
  );
}

export default Detail;
