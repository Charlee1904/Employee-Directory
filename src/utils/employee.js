// class employee extends Component {
//   constructor(props) {
//     super(props);
//   }
//   static async getInitialProps(){
//     const res = await axios.get("https://randomuser.me/api/?results=5000");
//     const {data} = res;
//     console.log(data);
//     return {posts:data};
//   }
//   render(){
//     const{posts} = this.props;
//     return(
//     <div>
//       <h1>Employee Directory</h1>
//       <ul>
//         {posts.map(post => (
//           <li key={post.id}>{post.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
//     }
// }
// export default employee;