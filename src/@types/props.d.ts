declare module 'props' {
  import * as React from 'react'

  export interface RegisterScreenProps {}
  export interface LoginScreenProps {}
  export interface HomeScreenProps {}
  export interface EcommerceScreenProps {}

  export interface NavbarComponentProps {}
  export interface WrapperComponentProps {}
  export interface CardComponentProps
    extends React.HTMLAttributes<HTMLDivElement> {
    title: string
  }
  export interface ButtonComponentProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string
    fullwidth?: boolean
    type?: 'primary' | 'secondary'
    appearance?: 'filled' | 'outline'
  }
  export interface InputComponentProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    title?: string
  }
  export interface ToggleComponentProps extends {} {
    onChange: () => any
    checked: boolean
  }
}
