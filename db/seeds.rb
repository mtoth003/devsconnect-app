require 'faker'
User.destroy_all
Post.destroy_all


puts "🌱 Seeding spices..."

10.times {
    User.create({
        first_name: Faker::Name.first_name,
        last_name: Faker::Name.last_name,
        username: Faker::Internet.username.delete(' ')+rand(1..1000).to_s,
        email: Faker::Internet.email,
        password: Faker::Internet.password,
        github: 'https://github.com/mtoth003',
        linkedin: 'www.linkedin.com/in/michaeltoth21',
        image_url: 'https://thepowerofthedream.org/wp-content/uploads/2015/09/generic-profile-picture.jpg',
        bio: Faker::TvShows::MichaelScott.quote 
        })
}

30.times {
    Post.create({
        header: Faker::Verb.base,
        description: Faker::ProgrammingLanguage.name,
        image_url: 'https://media.istockphoto.com/photos/programming-code-abstract-technology-background-of-software-developer-picture-id1224500457?b=1&k=20&m=1224500457&s=170667a&w=0&h=OOPEMFamnZo63_2t_W40mYSfU1WrFAHHZRBgNN-GSgI=',
        content_url: 'https://www.youtube.com/watch?v=RcvQagxK_9w',
        like_count: rand(1..100),
        user_id: User.all.sample.id
    })
}

30.times {
    Favorite.create({
        post_id: Post.all.sample.id,
        user_id: User.all.sample.id
    })
}


puts "✅ Done seeding!"