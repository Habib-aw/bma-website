import React from 'react';
import { useState, useEffect } from 'react';
import './calendar.css';
// import data from "../../data/times.json";
import pdfCalendar from '../../Assets/Baitul Mamur Academy Calendar.pdf';
import pdfCalendarPrint from '../../Assets/Baitul Mamur Academy Calendar print.pdf';
function Index({ data }) {
    const dayLightSavingStart = (currentDate) => {
        let january = new Date(
            currentDate.getFullYear(),
            0,
            1
        ).getTimezoneOffset();
        let july = new Date(
            currentDate.getFullYear(),
            6,
            1
        ).getTimezoneOffset();
        return Math.max(january, july) !== currentDate.getTimezoneOffset();
    };
    useEffect(() => {
        console.log('first', data);
        document.title = 'Calendar | Baitul Mamur Academy';
    }, []);
    const date = new Date();
    const currentMonth = date.getMonth();
    const currentDay = date.getDate();
    const [month, setMonth] = useState(currentMonth);
    const [start, setStart] = useState(true);
    const [jamaah, setJamaah] = useState(true);
    const [sunrise, setSunrise] = useState(true);
    const [fajr, setFajr] = useState(true);
    const [zuhr, setZuhr] = useState(true);
    const [asr, setAsr] = useState(true);
    const [mgrb, setMgrb] = useState(true);
    const [isha, setIsha] = useState(true);
    const [noneChanges, setNoneChanges] = useState(true);
    const [fajrChanges, setFajrChanges] = useState(false);
    const [zuhrChanges, setZuhrChanges] = useState(false);
    const [asrChanges, setAsrChanges] = useState(false);
    const [ishaChanges, setIshaChanges] = useState(false);
    const [today, setToday] = useState(false);
    const [todayOnwards, setTodayOnwards] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [startDate, setStartDate] = useState(1);
    const [endDate, setEndDate] = useState(31);
    const currentDate =
        date.toLocaleString('en-GB', { day: '2-digit' }) +
        '-' +
        date.toLocaleString('en-GB', { month: 'short' }).substring(0, 3) +
        '-' +
        new Date().getFullYear().toString().substring(2);
    var num = 0;
    const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ];
    const monthsLong = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    function ChangeAllTimes() {
        if (start && jamaah && sunrise) {
            setStart(false);
            setJamaah(false);
            setSunrise(false);
        } else {
            setStart(true);
            setJamaah(true);
            setSunrise(true);
        }
    }
    function resetFilters() {
        setNoneChanges(true);
        setFajrChanges(false);
        setZuhrChanges(false);
        setAsrChanges(false);
        setIshaChanges(false);
        setStart(true);
        setSunrise(true);
        setJamaah(true);
        setFajr(true);
        setZuhr(true);
        setAsr(true);
        setMgrb(true);
        setIsha(true);
        setToday(false);
        setTodayOnwards(false);
        setStartDate(1);
        setEndDate(31);
        setMonth(date.getMonth());
    }
    function setNoChangesAll() {
        setNoneChanges(true);
        setFajrChanges(false);
        setZuhrChanges(false);
        setAsrChanges(false);
        setIshaChanges(false);
        setStart(true);
        setJamaah(true);
        setSunrise(true);
        setFajr(true);
        setZuhr(true);
        setAsr(true);
        setMgrb(true);
        setIsha(true);
    }
    function setFajrChangesAll() {
        setFajrChanges(true);
        setZuhrChanges(false);
        setAsrChanges(false);
        setIshaChanges(false);
        setNoneChanges(false);

        setStart(false);
        setSunrise(false);
        setJamaah(true);

        setFajr(true);
        setZuhr(false);
        setAsr(false);
        setMgrb(false);
        setIsha(false);
    }
    function setZuhrChangesAll() {
        setZuhrChanges(true);
        setFajrChanges(false);
        setAsrChanges(false);
        setIshaChanges(false);
        setNoneChanges(false);

        setStart(false);
        setSunrise(false);
        setJamaah(true);

        setZuhr(true);
        setFajr(false);
        setAsr(false);
        setMgrb(false);
        setIsha(false);
    }
    function setAsrChangesAll() {
        setAsrChanges(true);
        setFajrChanges(false);
        setZuhrChanges(false);
        setIshaChanges(false);
        setNoneChanges(false);

        setStart(false);
        setSunrise(false);
        setJamaah(true);

        setAsr(true);
        setFajr(false);
        setZuhr(false);
        setMgrb(false);
        setIsha(false);
    }
    function setIshaChangesAll() {
        setIshaChanges(true);
        setFajrChanges(false);
        setZuhrChanges(false);
        setAsrChanges(false);
        setNoneChanges(false);

        setStart(false);
        setSunrise(false);
        setJamaah(true);

        setIsha(true);
        setFajr(false);
        setZuhr(false);
        setAsr(false);
        setMgrb(false);
    }
    function ChangeAllSalah() {
        if (fajr && zuhr && asr && mgrb && isha) {
            setFajr(false);
            setZuhr(false);
            setAsr(false);
            setMgrb(false);
            setIsha(false);
        } else {
            setFajr(true);
            setZuhr(true);
            setAsr(true);
            setMgrb(true);
            setIsha(true);
        }
    }
    function setOnwards() {
        if (todayOnwards) {
            setTodayOnwards(false);
        } else {
            setMonth(currentMonth);
            setTodayOnwards(true);
        }
    }
    return (
        <div id="calendar">
            <div className="bma-calendar-title">
                <h1 className="bma-calendar-title-text mono">
                    BMA {date.getFullYear()} calendar
                </h1>
            </div>
            <div className="calendar-filter">
                <div className="filter-checkbox-wrapper">
                    <div className="filter-checkbox">
                        <div className="filters-title-menu">
                            <h4>Filters</h4>
                            <div
                                className="filter-menu"
                                onClick={() => setToggle(!toggle)}
                            >
                                <span
                                    className={
                                        toggle
                                            ? 'filter-menu-item-clicked'
                                            : 'filter-menu-item'
                                    }
                                ></span>
                                <span
                                    className={
                                        toggle
                                            ? 'filter-menu-item-clicked'
                                            : 'filter-menu-item'
                                    }
                                ></span>
                                <span
                                    className={
                                        toggle
                                            ? 'filter-menu-item-clicked'
                                            : 'filter-menu-item'
                                    }
                                ></span>
                            </div>
                        </div>
                        <div className={(toggle ? 'view' : null) + ' checkbox'}>
                            <div className="times-salahs">
                                <div className="times">
                                    <h6>View Times</h6>
                                    <div>
                                        <input
                                            type="checkbox"
                                            id="all-times"
                                            name="all-times"
                                            value="all-times"
                                            checked={start && jamaah && sunrise}
                                            onChange={() => ChangeAllTimes()}
                                        />
                                        <label for="all-times">All</label>
                                    </div>
                                    <div>
                                        <input
                                            type="checkbox"
                                            id="start"
                                            name="start"
                                            value="start"
                                            checked={start}
                                            onChange={() => setStart(!start)}
                                        />
                                        <label for="start">Start times</label>
                                    </div>
                                    <div>
                                        <input
                                            type="checkbox"
                                            id="jamaah"
                                            name="jamaah"
                                            value="jamaah"
                                            checked={jamaah}
                                            onChange={() => setJamaah(!jamaah)}
                                        />
                                        <label for="jamaah">
                                            Jama'ah times
                                        </label>
                                    </div>
                                    <div>
                                        <input
                                            type="checkbox"
                                            id="sunrise"
                                            name="sunrise"
                                            value="sunrise"
                                            checked={sunrise}
                                            onChange={() =>
                                                setSunrise(!sunrise)
                                            }
                                        />
                                        <label for="sunrise">
                                            Sunrise times
                                        </label>
                                    </div>
                                </div>
                                <div className="salahs">
                                    <h6>View Prayers</h6>
                                    <div>
                                        <input
                                            type="checkbox"
                                            id="All-salah"
                                            name="All-salah"
                                            value="All-salah"
                                            checked={
                                                fajr &&
                                                zuhr &&
                                                asr &&
                                                mgrb &&
                                                isha
                                            }
                                            onChange={() => ChangeAllSalah()}
                                        />
                                        <label for="All-salah">All</label>
                                    </div>
                                    <div>
                                        <input
                                            type="checkbox"
                                            id="fajr"
                                            name="fajr"
                                            value="fajr"
                                            checked={fajr}
                                            onChange={() => setFajr(!fajr)}
                                        />
                                        <label for="fajr">Fajr</label>
                                    </div>
                                    <div>
                                        <input
                                            type="checkbox"
                                            id="zuhr"
                                            name="zuhr"
                                            value="zuhr"
                                            checked={zuhr}
                                            onChange={() => setZuhr(!zuhr)}
                                        />
                                        <label for="zuhr">Zuhr</label>
                                    </div>
                                    <div>
                                        <input
                                            type="checkbox"
                                            id="asr"
                                            name="asr"
                                            value="asr"
                                            checked={asr}
                                            onChange={() => setAsr(!asr)}
                                        />
                                        <label for="asr">Asr</label>
                                    </div>
                                    <div>
                                        <input
                                            type="checkbox"
                                            id="maghrib"
                                            name="maghrib"
                                            value="maghrib"
                                            checked={mgrb}
                                            onChange={() => setMgrb(!mgrb)}
                                        />
                                        <label for="maghrib">Maghrib</label>
                                    </div>
                                    <div>
                                        <input
                                            type="checkbox"
                                            id="isha"
                                            name="isha"
                                            value="isha"
                                            checked={isha}
                                            onChange={() => setIsha(!isha)}
                                        />
                                        <label for="isha">Isha</label>
                                    </div>
                                </div>
                            </div>
                            <div className="dates-changes">
                                <div className="dates">
                                    <h6>View Dates</h6>
                                    <div>
                                        <input
                                            type="number"
                                            id="start-date"
                                            name="start-date"
                                            value={startDate}
                                            onChange={(e) =>
                                                setStartDate(e.target.value)
                                            }
                                        />
                                        <label id="dash-number">-</label>
                                        <input
                                            type="number"
                                            id="end-date"
                                            name="end-date"
                                            value={endDate}
                                            onChange={(e) =>
                                                setEndDate(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="checkbox"
                                            id="Today-only"
                                            name="Today-only"
                                            value="Today-only"
                                            checked={today}
                                            onChange={() => setToday(!today)}
                                        />
                                        <label for="Today-only">
                                            Today only
                                        </label>
                                    </div>
                                    <div>
                                        <input
                                            type="checkbox"
                                            id="Today-onwards"
                                            name="Today-onwards"
                                            value="Today-onwards"
                                            checked={todayOnwards}
                                            onChange={() => setOnwards()}
                                        />
                                        <label for="Today-onwards">
                                            Today onwards
                                        </label>
                                    </div>
                                </div>
                                <div className="changes">
                                    <h6>View Jama'ah Changes</h6>
                                    <div>
                                        <input
                                            type="radio"
                                            id="no-changes"
                                            name="jamaah-changes"
                                            value="no-changes"
                                            defaultChecked
                                            checked={noneChanges}
                                            onChange={() => setNoChangesAll()}
                                        />
                                        <label for="no-changes">None</label>
                                    </div>
                                    <div>
                                        <input
                                            type="radio"
                                            id="fajr-changes"
                                            name="jamaah-changes"
                                            value="fajr-changes"
                                            checked={fajrChanges}
                                            onChange={() => setFajrChangesAll()}
                                        />
                                        <label for="fajr-changes">Fajr</label>
                                    </div>
                                    <div>
                                        <input
                                            type="radio"
                                            id="zuhr-changes"
                                            name="jamaah-changes"
                                            value="zuhr-changes"
                                            checked={zuhrChanges}
                                            onChange={() => setZuhrChangesAll()}
                                        />
                                        <label for="zuhr-changes">Zuhr</label>
                                    </div>
                                    <div>
                                        <input
                                            type="radio"
                                            id="asr-changes"
                                            name="jamaah-changes"
                                            value="asr-changes"
                                            checked={asrChanges}
                                            onChange={() => setAsrChangesAll()}
                                        />
                                        <label for="asr-changes">Asr</label>
                                    </div>
                                    <div>
                                        <input
                                            type="radio"
                                            id="isha-changes"
                                            name="jamaah-changes"
                                            value="isha-changes"
                                            checked={ishaChanges}
                                            onChange={() => setIshaChangesAll()}
                                        />
                                        <label for="isha-changes">Isha</label>
                                    </div>
                                </div>
                            </div>
                            <div className="reset-filters-wrapper">
                                <button
                                    className="reset-filters"
                                    onClick={() => resetFilters()}
                                >
                                    Reset
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="calendar-with-title">
                    <div className="table-title">
                        {today ? (
                            <div className="months-title">
                                {monthsLong[date.getMonth()]}
                            </div>
                        ) : (
                            <>
                                <button
                                    id={
                                        todayOnwards && month === currentMonth
                                            ? 'hidden'
                                            : null
                                    }
                                    onClick={
                                        month === 0
                                            ? () => setMonth(11)
                                            : () => setMonth(month - 1)
                                    }
                                >
                                    {'<'}
                                </button>
                                <div className="months-title">
                                    {monthsLong[month]}
                                </div>
                                <button
                                    id={
                                        todayOnwards && month === 11
                                            ? 'hidden'
                                            : null
                                    }
                                    onClick={
                                        month === 11
                                            ? () => setMonth(0)
                                            : () => setMonth(month + 1)
                                    }
                                >
                                    {'>'}
                                </button>
                            </>
                        )}
                    </div>
                    <div className="calendar">
                        <table border="2">
                            <thead className="thead disable-select">
                                <tr>
                                    <th></th>
                                    {fajr ? (
                                        <th
                                            colSpan={
                                                start && jamaah && sunrise
                                                    ? 3
                                                    : (start && jamaah) ||
                                                      (start && sunrise) ||
                                                      (jamaah && sunrise)
                                                    ? 2
                                                    : 1
                                            }
                                        >
                                            Fajr
                                        </th>
                                    ) : null}
                                    {zuhr ? (
                                        <th colSpan={start && jamaah ? 2 : 1}>
                                            Zuhr
                                        </th>
                                    ) : null}
                                    {asr ? (
                                        <th colSpan={start && jamaah ? 2 : 1}>
                                            Asr
                                        </th>
                                    ) : null}
                                    {mgrb ? (
                                        <th colSpan={start && jamaah ? 2 : 1}>
                                            Maghrib
                                        </th>
                                    ) : null}
                                    {isha ? (
                                        <th colSpan={start && jamaah ? 2 : 1}>
                                            Isha
                                        </th>
                                    ) : null}
                                </tr>

                                <tr>
                                    {today ? (
                                        <th>{months[date.getMonth()]}</th>
                                    ) : (
                                        <th>{months[month]}</th>
                                    )}
                                    {start && fajr ? <th>Start</th> : null}
                                    {jamaah && fajr ? <th>Jama'ah</th> : null}
                                    {sunrise && fajr ? <th>Sunrise</th> : null}
                                    {start && zuhr ? <th>Start</th> : null}
                                    {jamaah && zuhr ? <th>Jama'ah</th> : null}
                                    {start && asr ? <th>Start</th> : null}
                                    {jamaah && asr ? <th>Jama'ah</th> : null}
                                    {start && mgrb ? <th>Start</th> : null}
                                    {jamaah && mgrb ? <th>Jama'ah</th> : null}
                                    {start && isha ? <th>Start</th> : null}
                                    {jamaah && isha ? <th>Jama'ah</th> : null}
                                </tr>
                            </thead>
                            {data ? (
                                <tbody className="disable-select">
                                    {today ? (
                                        <tr
                                            className={
                                                data[date.getMonth()][
                                                    date.getDate() - 1
                                                ]['Date'] ===
                                                currentDate.toString()
                                                    ? 'bg-danger'
                                                    : null
                                            }
                                        >
                                            <td>{date.getDate()}</td>
                                            {start && fajr ? (
                                                <td>
                                                    {
                                                        data[date.getMonth()][
                                                            date.getDate() - 1
                                                        ]['Fajr_start']
                                                    }
                                                </td>
                                            ) : null}{' '}
                                            {jamaah && fajr ? (
                                                <td>
                                                    {
                                                        data[date.getMonth()][
                                                            date.getDate() - 1
                                                        ]['Fajr_jamaah']
                                                    }
                                                </td>
                                            ) : null}
                                            {sunrise && fajr ? (
                                                <td>
                                                    {
                                                        data[date.getMonth()][
                                                            date.getDate() - 1
                                                        ]['Sunrise']
                                                    }
                                                </td>
                                            ) : null}
                                            {start && zuhr ? (
                                                <td>
                                                    {
                                                        data[date.getMonth()][
                                                            date.getDate() - 1
                                                        ]['Zuhr_start']
                                                    }
                                                </td>
                                            ) : null}
                                            {jamaah && zuhr ? (
                                                <td>
                                                    {
                                                        data[date.getMonth()][
                                                            date.getDate() - 1
                                                        ]['Zuhr_jamaah']
                                                    }
                                                </td>
                                            ) : null}{' '}
                                            {start && asr ? (
                                                <td>
                                                    {
                                                        data[date.getMonth()][
                                                            date.getDate() - 1
                                                        ]['Asr_start1']
                                                    }
                                                </td>
                                            ) : null}{' '}
                                            {jamaah && asr ? (
                                                <td>
                                                    {
                                                        data[date.getMonth()][
                                                            date.getDate() - 1
                                                        ]['Asr_jamaah']
                                                    }
                                                </td>
                                            ) : null}
                                            {start && mgrb ? (
                                                <td>
                                                    {
                                                        data[date.getMonth()][
                                                            date.getDate() - 1
                                                        ]['Maghrib_start']
                                                    }
                                                </td>
                                            ) : null}
                                            {jamaah && mgrb ? (
                                                <td>
                                                    {
                                                        data[date.getMonth()][
                                                            date.getDate() - 1
                                                        ]['Maghrib_jamaah']
                                                    }
                                                </td>
                                            ) : null}{' '}
                                            {start && isha ? (
                                                <td>
                                                    {
                                                        data[date.getMonth()][
                                                            date.getDate() - 1
                                                        ]['Isha_start']
                                                    }
                                                </td>
                                            ) : null}
                                            {jamaah && isha ? (
                                                <td>
                                                    {
                                                        data[date.getMonth()][
                                                            date.getDate() - 1
                                                        ]['Isha_jamaah']
                                                    }
                                                </td>
                                            ) : null}
                                        </tr>
                                    ) : (
                                        data[month].map((day, index, array) => {
                                            num += 1;
                                            if (
                                                todayOnwards &&
                                                currentMonth === month &&
                                                num < currentDay
                                            ) {
                                                // pass or do nothing
                                            } else {
                                                return index !== 0 &&
                                                    ((fajrChanges &&
                                                        array[index - 1][
                                                            'Fajr_jamaah'
                                                        ] ===
                                                            day[
                                                                'Fajr_jamaah'
                                                            ]) ||
                                                        (zuhrChanges &&
                                                            array[index - 1][
                                                                'Zuhr_jamaah'
                                                            ] ===
                                                                day[
                                                                    'Zuhr_jamaah'
                                                                ]) ||
                                                        (asrChanges &&
                                                            array[index - 1][
                                                                'Asr_jamaah'
                                                            ] ===
                                                                day[
                                                                    'Asr_jamaah'
                                                                ]) ||
                                                        (ishaChanges &&
                                                            array[index - 1][
                                                                'Isha_jamaah'
                                                            ] ===
                                                                day[
                                                                    'Isha_jamaah'
                                                                ])) ? null : startDate <=
                                                      num && num <= endDate ? (
                                                    <tr
                                                        className={
                                                            day['Date'] ===
                                                            currentDate.toString()
                                                                ? 'bg-danger'
                                                                : null
                                                        }
                                                    >
                                                        <td>{num}</td>
                                                        {start && fajr ? (
                                                            <td>
                                                                {
                                                                    day[
                                                                        'Fajr_start'
                                                                    ]
                                                                }
                                                            </td>
                                                        ) : null}{' '}
                                                        {jamaah && fajr ? (
                                                            <td>
                                                                {
                                                                    day[
                                                                        'Fajr_jamaah'
                                                                    ]
                                                                }
                                                            </td>
                                                        ) : null}
                                                        {sunrise && fajr ? (
                                                            <td>
                                                                {day['Sunrise']}
                                                            </td>
                                                        ) : null}
                                                        {start && zuhr ? (
                                                            <td>
                                                                {
                                                                    day[
                                                                        'Zuhr_start'
                                                                    ]
                                                                }
                                                            </td>
                                                        ) : null}
                                                        {jamaah && zuhr ? (
                                                            <td>
                                                                {
                                                                    day[
                                                                        'Zuhr_jamaah'
                                                                    ]
                                                                }
                                                            </td>
                                                        ) : null}{' '}
                                                        {start && asr ? (
                                                            <td>
                                                                {
                                                                    day[
                                                                        'Asr_start1'
                                                                    ]
                                                                }
                                                            </td>
                                                        ) : null}{' '}
                                                        {jamaah && asr ? (
                                                            <td>
                                                                {
                                                                    day[
                                                                        'Asr_jamaah'
                                                                    ]
                                                                }
                                                            </td>
                                                        ) : null}
                                                        {start && mgrb ? (
                                                            <td>
                                                                {
                                                                    day[
                                                                        'Maghrib_start'
                                                                    ]
                                                                }
                                                            </td>
                                                        ) : null}
                                                        {jamaah && mgrb ? (
                                                            <td>
                                                                {
                                                                    day[
                                                                        'Maghrib_jamaah'
                                                                    ]
                                                                }
                                                            </td>
                                                        ) : null}{' '}
                                                        {start && isha ? (
                                                            <td>
                                                                {
                                                                    day[
                                                                        'Isha_start'
                                                                    ]
                                                                }
                                                            </td>
                                                        ) : null}
                                                        {jamaah && isha ? (
                                                            <td>
                                                                {
                                                                    day[
                                                                        'Isha_jamaah'
                                                                    ]
                                                                }
                                                            </td>
                                                        ) : null}
                                                    </tr>
                                                ) : null;
                                            }
                                        })
                                    )}
                                </tbody>
                            ) : null}
                        </table>
                    </div>
                    <div className="jummah-pdfCalendar">
                        <div>
                            <table className="jummah">
                                <tr>
                                    <td colSpan={2}>Jummah</td>
                                </tr>
                                <tr>
                                    <td>First Jama'ah</td>
                                    <td>Second Jama'ah</td>
                                </tr>
                                <tr>
                                    {dayLightSavingStart(new Date()) ? (
                                        <>
                                            <td>1:30</td>
                                            <td>1:50</td>
                                        </>
                                    ) : (
                                        <>
                                            <td>1:00</td>
                                            <td>1:20</td>
                                        </>
                                    )}
                                </tr>
                            </table>
                        </div>
                        <div className="cal-download">
                            <h3>Download Calendar below</h3>
                            <ul>
                                <li>
                                    <a href={pdfCalendar} download>
                                        BMA {date.getFullYear()} calendar
                                    </a>
                                </li>
                                {/* <li>
                                    <a href={pdfCalendarPrint} download>
                                        Double sided print order
                                    </a>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
