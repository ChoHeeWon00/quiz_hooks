let data_set = [
    {id:"aaa",pwd :"aaa", name : "홍길동", addr : '산골짜기'},
    {id:"bbb",pwd :"bbb", name:'김개똥', addr:'개똥별'},
    {id:"ccc",pwd :"ccc", name:'고길똥', addr:'마포구'},
]
export const getList = () => data_set;
export const getOne = ( id ) =>
    data_set.filter( (item) => item.id === id )[0];
export const deleteOne = ( id ) => {
    data_set = data_set.filter( (item) => item.id !== id );
    return 1;
}