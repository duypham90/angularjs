import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './/app-routing.module';
import { PostComponent } from './post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PlaceHolderComponent } from './place-holder/place-holder.component';
import { FacebookLoginComponent } from './facebook-login/facebook-login.component';
// import { GoogleLoginComponent } from './google-login/google-login.component';
import { SigninComponent } from './social-login/signin.component';
import { SocialLoginModule, AuthServiceConfig, FacebookLoginProvider } from './social-login/index';

// Configs 
export function getAuthServiceConfigs() {
    let config = new AuthServiceConfig(
        [
            {
                id: FacebookLoginProvider.PROVIDER_ID,
                provider: new FacebookLoginProvider("225873191443363")
            }
        ]
    )
    return config;
};

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        PostComponent,
        PostDetailComponent,
        PlaceHolderComponent,
        // FacebookLoginComponent,
        // SocialLoginComponent,
        // GoogleLoginComponent,
        SigninComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        SocialLoginModule
    ],
    providers: [
        {
            provide: AuthServiceConfig,
            useFactory: getAuthServiceConfigs
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
