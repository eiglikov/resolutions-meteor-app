Meteor.methods({

  addResolution(resolution){
    check(resolution, String);

    if(!Meteor.userId()){
      throw new Meteor.Error(401, "not-authorized");
    }
    Resolutions.insert({
      text: resolution,
      complete: false,
      createdAt: new Date(),
      user: Meteor.userId()
    });
  },

  toggleResolution(resolution) {
    check(resolution, Object);
    if(Meteor.userId() !== resolution.user){
      throw new Meteor.Error(401, "not-authorized");
    }
    Resolutions.update(resolution._id, {
      $set: {complete: !resolution.complete}
    });
  },

  deleteResolution(resolution) {
    check(resolution, Object);
    if(Meteor.userId() !== resolution.user){
      throw new Meteor.Error(401, "not-authorized");
    }
    Resolutions.remove(resolution._id);
  }
});
