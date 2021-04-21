import React from "react";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YoutubeIcon from "@material-ui/icons/YouTube";
import { SvgIcon } from "@material-ui/core";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__column">
          <a className="footer__column--title">滚滚长江</a>
          <a className="footer__link">滚滚长江</a>
          <a className="footer__link">浪花淘尽</a>
          <a className="footer__link">成败转头</a>
        </div>
        <div className="footer__column">
          <a className="footer__column--title">青山依旧</a>
          <a className="footer__link">白发渔樵</a>
          <a className="footer__link">白发渔樵</a>
          <a className="footer__link">樵江渚上</a>
        </div>
        <div className="footer__column">
          <a className="footer__column--title">古今多少</a>
          <a className="footer__link">壶浊酒喜</a>
          <a className="footer__link">滚滚长江</a>
        </div>
        <div className="footer__column">
          <a className="footer__column--title">浪花淘尽</a>
          <a className="footer__link">几度夕阳</a>
        </div>
        <div className="footer__column footer__column--last">
          <a className="footer__column--title">白发渔樵</a>
          <a className="footer__link--social">
            <FacebookIcon className="footer__link--icon" />
            <p className="footer__text--social">Facebook</p>
          </a>
          <a className="footer__link--social">
            <InstagramIcon className="footer__link--icon" />
            <p className="footer__text--social">Instagram</p>
          </a>
          <a className="footer__link--social">
            <YoutubeIcon className="footer__link--icon" />
            <p className="footer__text--social">Youtube</p>
          </a>
          <a className="footer__link--social">
            <SvgIcon className="footer__link--icon">
              <path d="m12 .5c-6.615 0-12 4.398-12 9.803 0 4.841 4.27 8.897 10.035 9.668.391.083.923.26 1.058.594.12.303.079.771.038 1.087l-.164 1.026c-.045.303-.24 1.193 1.049.649 1.291-.542 6.916-4.104 9.436-7.019 1.724-1.9 2.548-3.847 2.548-6.005 0-5.405-5.385-9.803-12-9.803zm-4.697 13.017h-2.386c-.345 0-.63-.287-.63-.633v-4.801c0-.347.285-.634.63-.634.348 0 .63.287.63.634v4.167h1.756c.348 0 .629.285.629.634 0 .346-.282.633-.629.633zm2.466-.633c0 .346-.282.633-.631.633-.345 0-.627-.287-.627-.633v-4.801c0-.347.282-.634.63-.634.346 0 .628.287.628.634zm5.741 0c0 .272-.174.513-.432.6-.064.021-.133.031-.199.031-.211 0-.391-.091-.51-.252l-2.443-3.338v2.958c0 .346-.279.633-.631.633-.346 0-.626-.287-.626-.633v-4.8c0-.272.173-.513.43-.599.06-.023.136-.033.194-.033.195 0 .375.105.495.256l2.462 3.351v-2.975c0-.347.282-.634.63-.634.345 0 .63.287.63.634zm3.855-3.035c.349 0 .63.287.63.635 0 .347-.281.634-.63.634h-1.755v1.132h1.755c.349 0 .63.285.63.634 0 .346-.281.633-.63.633h-2.386c-.345 0-.627-.287-.627-.633v-4.801c0-.347.282-.634.63-.634h2.386c.346 0 .627.287.627.634 0 .351-.281.634-.63.634h-1.755v1.132z" />
            </SvgIcon>
            <p className="footer__text--social">白发渔樵</p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
