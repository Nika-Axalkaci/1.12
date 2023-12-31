import Card from './card'
import './style/list.css'
import book1image from '../assets/book1.jpg'
import book2image from '../assets/book2.jpg'
import book3image from '../assets/book3.png'


const data=[
  {
    id:1,
    image:book1image,
   name: 'ვეფხისტყაოსანი',
    author:'შოთა რუსთაველი' ,
   description:'XII საუკუნის ქართველი პოეტის, შოთა რუსთაველის ჩვენამდე მოღწეული ერთადერთი პოემა. შედგება პროლოგის, ძირითადი ნაწილისა და ეპილოგისაგან. შინაარსის მხრივ, ვეფხისტყაოსანი რთული ნაწარმოებია; აქ ორი პარალელური ამბავია მოთხრობილი — არაბეთისა და ინდოეთისა, თუმცა ორივე მათგანი ერთმანეთთან სიუჟეტურად დაკავშირებულია. პოემა მდიდარია პერსონაჟებით. დაწერილია შაირის სტილში, თექვსმეტმარცვლიანი საზომით.'
  },
  {
    id:2,
    image:book2image,
   name: 'ვაჟა-ფშაველა მოთხრობები',
    author:'ვაჟა ფშაველა' ,
    description:'ვაჟა-ფშაველა უკეთილესი მთხრობელია, რომელმაც ბუნების უკლებლივ ყველა ნაშიერი ბავშვისთვის გასაგებ ენაზე აამეტყველა. ამ მოთხრობების წიგნში მისი, ქართული საბავშვო მწერლობის ერთ-ერთი მესაძირკვლის, სწორედ ეს ჯადოსნური მხარე ჩანს.'
  },
  {
    id:3,
    image:book3image,
   name: 'დიდოსტატის კონსტანტინეს მარჯვენა',
    author:'კონსტანტინე გამსახურდია' ,
    description:'კონსტანტინე გამსახურდიას ისტორული რომანი ,,დიდოსტატის კონსტანტინეს მარჯვენა“ სრულყოფილად წარმოგვიდგენს ქართული რენესანსის ეპოქას, წინააღმდეგობებით, კონფლიქტებით და ,,მრუმე ღამეებით“ აღსავსე მკაცრ საუკუნეს.'
  }
]
const List = () => {
  return (
    <div className='list-div'>
      {data.map((card)=> <Card key={card.id} image={card.image} name={card.name} author={card.author} description={card.description} />)}
      
    </div>
  )
}

export default List