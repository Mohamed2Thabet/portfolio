import adobeXd from '../app/skills/adobe-xd.svg';
import adobeaudition from '../app/skills/adobeaudition.svg';
import afterEffects from '../app/skills/after-effects.svg';
import angular from '../app/skills/angular.svg';
import aws from '../app/skills/aws.svg';
import azure from '../app/skills/azure.svg';
import blender from '../app/skills/blender.svg';
import bootstrap from '../app/skills/bootstrap.svg';
import bulma from '../app/skills/bulma.svg';
import c from '../app/skills/c.svg';
import canva from '../app/skills/canva.svg';
import capacitorjs from '../app/skills/capacitorjs.svg';
import coffeescript from '../app/skills/coffeescript.svg';
import cplusplus from '../app/skills/cplusplus.svg';
import csharp from '../app/skills/csharp.svg';
import css from '../app/skills/css.svg';
import dart from '../app/skills/dart.svg';
import deno from '../app/skills/deno.svg';
import django from '../app/skills/django.svg';
import docker from '../app/skills/docker.svg';
import fastify from '../app/skills/fastify.svg';
import figma from '../app/skills/figma.svg';
import firebase from '../app/skills/firebase.svg';
import flutter from '../app/skills/flutter.svg';
import gcp from '../app/skills/gcp.svg';
import gimp from '../app/skills/gimp.svg';
import git from '../app/skills/git.svg';
import go from '../app/skills/go.svg';
import graphql from '../app/skills/graphql.svg';
import haxe from '../app/skills/haxe.svg';
import html from '../app/skills/html.svg';
import illustrator from '../app/skills/illustrator.svg';
import ionic from '../app/skills/ionic.svg';
import java from '../app/skills/java.svg';
import javascript from '../app/skills/javascript.svg';
import julia from '../app/skills/julia.svg';
import kotlin from '../app/skills/kotlin.svg';
import lightroom from '../app/skills/lightroom.svg';
import markdown from '../app/skills/markdown.svg';
import materialui from '../app/skills/materialui.svg';
import matlab from '../app/skills/matlab.svg';
import memsql from '../app/skills/memsql.svg';
import microsoftoffice from '../app/skills/microsoftoffice.svg';
import mongoDB from '../app/skills/mongoDB.svg';
import mysql from '../app/skills/mysql.svg';
import nextJS from '../app/skills/nextJS.svg';
import nginx from '../app/skills/nginx.svg';
import numpy from '../app/skills/numpy.svg';
import nuxtJS from '../app/skills/nuxtJS.svg';
import opencv from '../app/skills/opencv.svg';
import photoshop from '../app/skills/photoshop.svg';
import php from '../app/skills/php.svg';
import picsart from '../app/skills/picsart.svg';
import postgresql from '../app/skills/postgresql.svg';
import premierepro from '../app/skills/premierepro.svg';
import prisma from '../app/skills/prisma.svg';
import python from '../app/skills/python.svg';
import pytorch from '../app/skills/pytorch.svg';
import react from '../app/skills/react.svg';
import ruby from '../app/skills/ruby.svg';
import selenium from '../app/skills/selenium.svg';
import sketch from '../app/skills/sketch.svg';
import strapi from '../app/skills/strapi.svg';
import svelte from '../app/skills/svelte.svg';
import swift from '../app/skills/swift.svg';
import tailwind from '../app/skills/tailwind.svg';
import tensorflow from '../app/skills/tensorflow.svg';
import typescript from '../app/skills/typescript.svg';
import unity from '../app/skills/unity.svg';
import vitejs from '../app/skills/vitejs.svg';
import vue from '../app/skills/vue.svg';
import vuetifyjs from '../app/skills/vuetifyjs.svg';
import webix from '../app/skills/webix.svg';
import wolframalpha from '../app/skills/wolframalpha.svg';
import wordpress from '../app/skills/wordpress.svg';

import pandas from '../app/skills/pandas.svg';
import scikitlearn from '../app/skills/scikit-learn.svg';
import dotnet from '../app/skills/dotnet.svg';
import dotnetcore from '../app/skills/dotnetcore.svg'
import kubernetes from '../app/skills/kubernetes.svg'
import linux from '../app/skills/linux.svg'
import sqlalchemy from '../app/skills/sqlalchemy.svg'
import fastapi from '../app/skills/fastapi.svg'



export const skillsImage = (skill:string) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'gcp':
      return gcp;
    case 'html':
      return html;
    case 'photoshop':
      return photoshop;
    case 'docker':
      return docker;
    case 'illustrator':
      return illustrator;
    case 'adobe xd':
      return adobeXd;
    case 'after effects':
      return afterEffects;
    case 'css':
      return css;
    case 'angular':
      return angular;
    case 'javascript':
      return javascript;
    case 'next js':
      return nextJS;
    case 'nuxt js':
      return nuxtJS;
    case 'react':
      return react;
    case 'svelte':
      return svelte;
    case 'typescript':
      return typescript;
    case 'vue':
      return vue;
    case 'bootstrap':
      return bootstrap;
    case 'bulma':
      return bulma;
    case 'capacitorjs':
      return capacitorjs;
    case 'coffeescript':
      return coffeescript;
    case 'memsql':
      return memsql;
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;
    case 'postgresql':
      return postgresql;
    case 'tailwind':
      return tailwind;
    case 'vitejs':
      return vitejs;
    case 'vuetifyjs':
      return vuetifyjs;
    case 'c':
      return c;
    case 'c++':
      return cplusplus;
    case 'c#':
      return csharp;
    case 'dart':
      return dart;
    case 'go':
      return go;
    case 'java':
      return java;
    case 'kotlin':
      return kotlin;
    case 'julia':
      return julia;
    case 'matlab':
      return matlab;
    case 'php':
      return php;
    case 'prisma':
      return prisma;
    case 'python':
      return python;
    case 'ruby':
      return ruby;
    case 'swift':
      return swift;
    case 'adobe audition':
      return adobeaudition;
    case 'aws':
      return aws;
    case 'deno':
      return deno;
    case 'django':
      return django;
    case 'firebase':
      return firebase;
    case 'gimp':
      return gimp;
    case 'git':
      return git;
    case 'graphql':
      return graphql;
    case 'lightroom':
      return lightroom;
    case 'materialui':
      return materialui;
    case 'nginx':
      return nginx;
    case 'numpy':
      return numpy;
    case 'opencv':
      return opencv;
    case 'premiere pro':
      return premierepro;
    case 'pytorch':
      return pytorch;
    case 'selenium':
      return selenium;
    case 'strapi':
      return strapi;
    case 'tensorflow':
      return tensorflow;
    case 'webix':
      return webix;
    case 'wordpress':
      return wordpress;
    case 'azure':
      return azure;
    case 'blender':
      return blender;
    case 'fastify':
      return fastify;
    case 'figma':
      return figma;
    case 'flutter':
      return flutter;
    case 'haxe':
      return haxe;
    case 'ionic':
      return ionic;
    case 'markdown':
      return markdown;
    case 'microsoft office':
      return microsoftoffice;
    case 'picsart':
      return picsart;
    case 'sketch':
      return sketch;
    case 'unity':
      return unity;
    case 'wolframalpha':
      return wolframalpha;
    case 'canva':
      return canva;
    case 'pandas':
      return pandas;
    case 'sklearn':
      return scikitlearn;
    case '.net':
      return dotnet;
    case '.net core':
      return dotnetcore
    case 'kubernetes':
      return kubernetes;
    case 'linux':
      return linux;
    case 'sqlalchemy':
      return sqlalchemy;
    case 'fastapi':
      return fastapi;
    default:
      break;
  }
}