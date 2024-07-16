import BarChart from "./components/BarChart"

const Home = () => {
    const newData1 = {
        categories: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C#'],
        values: [80, 50, 90, 80, 70]
    }
    const newData2 = {
        categories: ['Html', 'Css', 'JavaScript'],
        values: [60, 80, 90]
    }
    return (
        <div>
            <BarChart title={'前端三大框架满意度'} />
            <BarChart title={'五大工具使用度'} data={newData1} />
            <BarChart title={'前端基础工具使用频率'} data={newData2} />
        </div>
    )
}

export default Home