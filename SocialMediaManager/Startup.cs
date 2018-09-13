using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(SocialMediaManager.Startup))]
namespace SocialMediaManager
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
