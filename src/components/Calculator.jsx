import CurrentTime from './CurrentTime';

const Calculator = () => {

  return (
    <div className="w-64 h-auto bg-white rounded-2xl shadow-xl border-4 border-gray-100">
    <div className="w-auto mx-3 my-2 h-6 flex justify-between">
      <div className="text-sm">
        <CurrentTime />
      </div>
      <div className="flex items-center text-xs space-x-1">
        <i className="fas fa-signal"></i>
        <i className="fas fa-wifi"></i>
        <i className="fas fa-battery-three-quarters text-sm"></i>
      </div>
    </div>
    <div className="w-auto m-3 h-28 text-right space-y-2 py-2">
      <div className="text-gray-700">20 + 20</div>
      <div className="text-black font-bold text-3xl">40</div>
    </div>
    <div className="w-auto m-1 h-auto mb-2">
      <div className="m-2 flex justify-between">
        <div className="btn-yellow">C</div>
        <div className="btn-grey">(</div>
        <div className="btn-grey">)</div>
        <div className="btn-orange">/</div>
      </div>
      <div className="m-2 flex justify-between">
        <div className="btn-grey">7</div>
        <div className="btn-grey">8</div>
        <div className="btn-grey">9</div>
        <div className="btn-orange">x</div>
      </div>
      <div className="m-2 flex justify-between">
        <div className="btn-grey">4</div>
        <div className="btn-grey">5</div>
        <div className="btn-grey">6</div>
        <div className="btn-orange">-</div>
      </div>
      <div className="m-2 flex justify-between">
        <div className="btn-grey">1</div>
        <div className="btn-grey">2</div>
        <div className="btn-grey">3</div>
        <div className="btn-orange">+</div>
      </div>
      <div className="m-2 flex justify-between">
        <div className="btn-grey-jumbo">0</div>
        <div className="flex w-full ml-3 justify-between">
          <div className="btn-grey">.</div>
          <div className="btn-green">=</div>
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <div className="w-20 h-1 bg-gray-100 rounded-l-xl rounded-r-xl"></div>
      </div>
    </div>
  </div>
  )
}

export default Calculator