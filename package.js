Package.describe({
  summary: "Reactive Javascript-state-machine for Meteor",
  version: "0.1.1",
  git: "https://github.com/zhouzhuojie/meteor-state-machine.git",
  name: "flowkey:state-machine"
});

Package.onUse(function (api) {
  api.versionsFrom("1.0")
  api.use("tracker");
  api.add_files('state-machine.js', 'client');
  api.add_files('main.js', 'client');
  if (api.export){
    api.export('StateMachine', 'client');
  }
});
