import React, { useState } from 'react';
import { GiSteeringWheel } from 'react-icons/gi';
import { MdOutlineChair } from 'react-icons/md';
import { Save, Edit2, Trash2 } from 'lucide-react';

const SeatTypes = {
  AVAILABLE: 'available',
  BOOKED: 'booked',
  SELECTED: 'selected',
};

const Seat = ({ seatNumber, type, onClick }) => {
  const seatColor =
    type === SeatTypes.SELECTED ? 'text-violet-600' :
    type === SeatTypes.BOOKED ? 'text-red-500' : 'text-neutral-600';

  return (
    <MdOutlineChair
      className={`text-3xl -rotate-90 cursor-pointer ${seatColor}`}
      onClick={() => onClick(seatNumber)}
    />
  );
};

const BusSeatLayout = () => {
  const [rows, setRows] = useState(7); // Number of vertical seats (rows)
  const [cols, setCols] = useState(2); // Number of columns per section
  const [sections, setSections] = useState(2); // Number of sections
  const [layout, setLayout] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [selectedSeatType, setSelectedSeatType] = useState(SeatTypes.AVAILABLE);

  const initializeLayout = () => {
    const totalSeats = rows * cols * sections;
    const newLayout = Array(totalSeats).fill(SeatTypes.AVAILABLE);
    setLayout(newLayout);
    setEditMode(true);
  };

  const handleSeatClick = (seatNumber) => {
    if (!editMode) return;

    const newLayout = [...layout];
    newLayout[seatNumber - 1] = selectedSeatType;
    setLayout(newLayout);
  };

  const handleSave = () => {
    console.log('Saving layout:', layout);
    setEditMode(false);
  };

  const renderSeats = () => {
    
    let seatNumber = 1;
    return Array.from({ length: sections }).map((_, sectionIndex) => (
      <div key={sectionIndex} className="flex space-x-8">
        {Array.from({ length: cols }).map((_, colIndex) => (
          <div key={colIndex} className="space-y-3">
            {Array.from({ length: rows }).map((_, rowIndex) => (
              <Seat
                key={seatNumber}
                seatNumber={seatNumber}
                type={layout[seatNumber - 1]}
                onClick={handleSeatClick}
              />
            ))}
          </div>
        ))}
      </div>
    ));
  };

  return (
    <div className="space-y-5">
      <h2 className="text-xl text-neutral-800 dark:text-neutral-100 font-medium">
        Bus Seat Layout Editor
      </h2>

      <div className="flex space-x-4 mb-4">
        <input
          type="number"
          value={rows}
          onChange={(e) => setRows(parseInt(e.target.value))}
          placeholder="Vertical Seats (Rows)"
          className="w-24 px-2 py-1 border rounded"
        />
        <input
          type="number"
          value={cols}
          onChange={(e) => setCols(parseInt(e.target.value))}
          placeholder="Columns per Section"
          className="w-24 px-2 py-1 border rounded"
        />
        <input
          type="number"
          value={sections}
          onChange={(e) => setSections(parseInt(e.target.value))}
          placeholder="Number of Sections"
          className="w-24 px-2 py-1 border rounded"
        />
      </div>

      <div className="w-full flex flex-col justify-between gap-8">
        {layout.length > 0 ? (
          <div className="space-y-4">{renderSeats()}</div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-neutral-500">Click 'Initialize Layout' to begin</p>
          </div>
        )}
      </div>

      <div className="flex space-x-2 mt-4">
        <button
          onClick={initializeLayout}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center"
        >
          <Edit2 className="w-4 h-4 mr-2" />
          Initialize Layout
        </button>
        <button
          onClick={() => setEditMode(!editMode)}
          disabled={!layout.length}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50 flex items-center"
        >
          <Edit2 className="w-4 h-4 mr-2" />
          {editMode ? 'Exit Edit Mode' : 'Edit Layout'}
        </button>
        <button
          onClick={handleSave}
          disabled={!editMode}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50 flex items-center"
        >
          <Save className="w-4 h-4 mr-2" />
          Save Layout
        </button>
        <button
          onClick={() => {
            setLayout([]);
            setEditMode(false);
          }}
          disabled={!layout.length}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 disabled:opacity-50 flex items-center"
        >
          <Trash2 className="w-4 h-4 mr-2" />
          Clear Layout
        </button>
      </div>

      {editMode && (
        <div className="mt-4">
          <select
            value={selectedSeatType}
            onChange={(e) => setSelectedSeatType(e.target.value)}
            className="w-48 px-2 py-1 border rounded"
          >
            <option value={SeatTypes.AVAILABLE}>Available</option>
            <option value={SeatTypes.BOOKED}>Booked</option>
            <option value={SeatTypes.SELECTED}>Selected</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default BusSeatLayout;