import React from 'react';
import backgroundImage from './pexels-suket-dedhia-570026.jpg';
import Navbar from '../components/Navbar';

const SingleBlog = () => {
  return (
    <div>
      <Navbar />
      <div
        className='blog-cover'
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '300px', // Adjust the minimum height as needed
        }}
      ></div>
      <div className='blog-text-container pr-20 pl-20 border-black'>
        <div className='font-bold text-5xl text-left text-black p-2 m-5 bg-white'>
          You may have the world, if I may have Ayodhya
        </div>
        <div className='author-info text-xl text-left pl-2 ml-5'>by Pratham Gadkari, on Aug 15 2024</div>
        <div className='line my-6 border-b border-black'></div>
        <div className='blog-crux pt-5 pl-2 ml-5 mr-5 text-black text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis odio ipsum, eu commodo magna feugiat ut. Pellentesque a rhoncus felis. Nunc venenatis, nunc vitae pharetra fringilla, nisi turpis sodales neque, eu porta ligula nibh non augue. Ut diam tellus, tempus in bibendum sit amet, rutrum eget mi. Aenean sed sapien quam. Nunc et turpis tristique, vulputate sem ut, porttitor purus. Maecenas quam lectus, dignissim sed convallis quis, fermentum eget arcu.</div>
        <div className='blog-crux pt-5 pl-2 ml-5 mr-5 text-black text-lg'>Curabitur interdum ante vehicula, elementum metus pellentesque, lobortis felis. Nulla facilisi. Sed euismod quis magna vestibulum suscipit. Vivamus neque est, tempor eu fringilla ac, eleifend vitae risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus metus felis, ornare a nisl at, efficitur accumsan magna. In eleifend sagittis condimentum. Pellentesque id diam at orci vestibulum vehicula ac non sem. Nullam aliquam augue eros, non accumsan velit varius eu. Proin tempor mi nisi, sit amet vehicula turpis tincidunt non. Aenean nunc urna, viverra id iaculis eget, ullamcorper et tortor. Sed non dolor nec neque rutrum mattis nec non nunc. Vestibulum vitae velit commodo, consectetur sem sit amet, placerat leo. Maecenas posuere viverra lacinia. Aenean sit amet ultrices lacus. Proin et consequat leo.</div>
        <div className='blog-crux pt-5 pl-2 ml-5 mr-5 text-black text-lg'>Sed a interdum sapien. Mauris vel orci eget urna egestas pellentesque. Etiam faucibus sagittis ex quis iaculis. Nunc sit amet ornare ex, quis dapibus felis. Cras leo tortor, lacinia sed mi a, aliquet gravida ante. Phasellus blandit non lacus et efficitur. Aliquam malesuada in dui non aliquet. Donec a lobortis ex. In rutrum pulvinar quam, sed porta dolor egestas ultricies. Sed condimentum facilisis felis, a fringilla magna laoreet vitae. Integer ex sapien, tempus ac gravida vitae, ornare quis ante. Suspendisse efficitur finibus leo, lacinia fringilla quam aliquet at. Sed ornare turpis vel massa pellentesque, non luctus arcu maximus. Aenean vulputate libero in ultrices aliquet.</div>
        <div className='blog-crux pt-5 pl-2 ml-5 mr-5 text-black text-lg'>Quisque justo ex, consequat at massa in, rhoncus suscipit lorem. Fusce quis risus tristique, suscipit erat ut, porttitor velit. In vitae mollis nulla. Aliquam sem libero, scelerisque non placerat non, rutrum venenatis ante. Duis a mi tellus. Duis eu nunc gravida, auctor tortor non, imperdiet sapien. Cras condimentum eros id urna pharetra ornare. Phasellus id neque eu elit varius varius. Cras non nulla ipsum.</div>
        <div className='blog-crux pt-5 pl-2 ml-5 mr-5 text-black text-lg'>Vivamus nisl turpis, tristique vitae mi eu, rhoncus suscipit dolor. Aenean velit ex, ultrices id orci quis, interdum egestas nisi. Proin dignissim mauris ut neque auctor mattis. Nullam ac eleifend neque. Suspendisse potenti. Nam aliquam neque sit amet sagittis volutpat. Etiam accumsan magna at vulputate tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut et placerat massa.</div>
        <div className='blog-crux pt-5 pl-2 ml-5 mr-5 pb-5 text-black text-lg'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc auctor efficitur vulputate. Proin non risus quis sapien vulputate malesuada a ut arcu. Nulla vel arcu at mauris viverra tempor nec sit amet orci. Aenean lobortis ut nunc eu tempor. Sed mattis ipsum ac fermentum mollis. Quisque venenatis sapien ac ultricies porttitor. In id arcu et neque ullamcorper congue. Vestibulum semper consequat feugiat. Morbi auctor arcu eget lacus.</div>
      </div>
    </div>
  );
};

export default SingleBlog;
